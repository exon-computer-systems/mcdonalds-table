import React, { useEffect, useState } from "react";
import { useGlobalOrders } from "../../../context/OrdersContext";
import { database, ref, onValue, remove } from "../../../../firebase";
import styles from "./Orders.module.css";

const Orders = () => {
  const { globalArray } = useGlobalOrders();
  const [orders, setOrders] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    console.log("Aktualne globalArray w Waiter:", globalArray);

    const ordersRef = ref(database, "orders");
    const unsubscribe = onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersArray = Object.entries(data).map(([key, value]) => ({
          orderId: key,
          ...value,
        }));
        setOrders(ordersArray);
      } else {
        setOrders([]);
      }
    });

    return () => unsubscribe();
  }, [globalArray]);

  const handleCompleteOrder = (orderId) => {
    const orderRef = ref(database, `orders/${orderId}`);
    remove(orderRef)
      .then(() => {
        console.log(`Zamówienie ${orderId} zostało zrealizowane.`);
      })
      .catch((error) => {
        console.error("Wystąpił błąd podczas usuwania zamówienia: ", error);
      });
  };

  const handleConfirmCompleteOrder = () => {
    if (selectedOrder) {
      handleCompleteOrder(selectedOrder.orderId);
      setShowDialog(false);
      setSelectedOrder(null);
    }
  };

  const handleCheckboxChange = (orderId, itemId) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [orderId]: {
        ...prevState[orderId],
        [itemId]: !prevState[orderId]?.[itemId],
      },
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>ZAMÓWIENIA:</h1>

      {orders.map((order) => (
        <div key={order.orderId} style={{ marginBottom: "80px" }}>
          <h2>Zamówienie {order.orderId}</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Nazwa</th>
                  <th>Ilość</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(order).flatMap(([category, items]) =>
                  category !== "orderId"
                    ? items.map((item) => (
                        <tr
                          key={item.itemId}
                          style={{
                            backgroundColor: checkedItems[order.orderId]?.[
                              item.itemId
                            ]
                              ? "lightgreen"
                              : "white",
                          }}
                        >
                          <td>
                            <input
                              type="checkbox"
                              checked={
                                checkedItems[order.orderId]?.[item.itemId] ||
                                false
                              }
                              onChange={() =>
                                handleCheckboxChange(order.orderId, item.itemId)
                              }
                            />
                          </td>
                          <td>
                            <img
                              src={`/src/assets/${item.itemImage}`}
                              alt={item.itemName}
                              className={styles.image}
                            />
                          </td>
                          <td>{item.itemName}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))
                    : []
                )}
              </tbody>
            </table>
          </div>
          <div className={styles.actionsContainer}>
            <button
              onClick={() => {
                setSelectedOrder(order);
                setShowDialog(true);
              }}
              className={styles.completeButton}
            >
              Zrealizowano całe Zamówienie
            </button>
          </div>
        </div>
      ))}

      {showDialog && selectedOrder && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Czy na pewno zrealizowano to zamówienie w całości?</h3>
            <button onClick={() => setShowDialog(false)} className={styles.no}>
              NIE
            </button>
            <button onClick={handleConfirmCompleteOrder} className={styles.yes}>
              TAK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

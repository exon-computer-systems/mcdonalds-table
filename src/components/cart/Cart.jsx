import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ userOrder, setShowCart, setUserOrder }) => {
    const [order, setOrder] = useState(userOrder);
    const [overallPrice, setOverallPrice] = useState(0);

    const removeItem = (category, itemId) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            [category]: prevOrder[category].filter(
                (item) => item.itemId !== itemId
            ),
        }));
    };

    useEffect(() => {
        setUserOrder(order);
    }, [order]);

    const calculateTotal = () => {
        return Object.keys(userOrder).reduce((total, category) => {
            const categoryTotal = userOrder[category].reduce(
                (categorySum, item) => {
                    return categorySum + item.itemPrice * item.quantity;
                },
                0
            );
            return total + categoryTotal;
        }, 0);
    };

    const categories = Object.keys(userOrder);
    const totalPrice = calculateTotal();

    return (
        <section className={styles.container}>
            <h1
                className={styles.heading}
                onClick={() => console.log(userOrder)}
            >
                Twoje zamówienie
            </h1>
            <section className={styles.cart_cont}>
                <section className={styles.cart}>
                    {categories.map((category) =>
                        userOrder[category]?.length > 0
                            ? userOrder[category].map((item) => (
                                  <CartItem
                                      key={item.itemId}
                                      item={item}
                                      category={category}
                                      removeItem={removeItem}
                                  />
                              ))
                            : null
                    )}
                </section>
                <section className={styles.cart_checkout_cont}>
                    <section className={styles.cart_checkout}>
                        <section className={styles.cc_overall_price_cont}>
                            <p className={styles.cc_overall_price}>
                                <span className={styles.cc_overall_price_p1}>
                                    Do zapłaty
                                </span>
                                <span className={styles.cc_overall_price_p2}>
                                    {parseFloat(totalPrice).toFixed(2)} zł
                                </span>
                            </p>
                        </section>

                        <section className={styles.cc_btns}>
                            <button
                                className={`${styles.cc_btn} ${styles.cc_btn_1}`}
                                onClick={() => setShowCart(false)}
                            >
                                Dobierz produkty
                            </button>
                            <button
                                className={`${styles.cc_btn} ${styles.cc_btn_2}`}
                            >
                                Zamów
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Cart;

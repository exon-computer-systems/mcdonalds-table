import { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.css";

import SubmenuItem from "./SubmenuItem";
import MenuCategory from "./MenuCategory";
import ProductPreview from "./ProductPreview";
import Cart from "../cart/Cart";

import burgerBkg from "../../assets/burgerBkg.jpg";
import twoForUBkg from "../../assets/2foru.jpg";
import iceScreamBkg from "../../assets/icescreamBkg.jpg";
import coffeeBkg from "../../assets/coffeeBkg.jpg";
import friesBkg from "../../assets/friesBkg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faXmark,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "../header/Header";

import { menu as menuData } from "../../data/menu.js";

const Menu = ({
  enlarge,
  reset,
  size,
  showCart,
  setShowCart,
  orderItem,
  setOrderQuantity,
  userOrder,
  setUserOrder,
  showItemPreview,
  setShowItemPreview,
  selectedCategory,
  setSelectedCategory,
}) => {
  // const menuRef = useScrollToStart(60000, () => handleUserInactivity());

  const [filter, setFilter] = useState("");
  // const [userOrder, setUserOrder] = useState({});
  const scrollRef = useRef(null);
  const [menu, setMenu] = useState(menuData);

  const addToOrder = (item, category, action) => {
    // find category in menu
    const categoryItems = menu[category].categoryMenu;

    if (categoryItems) {
      const itemToOrder = categoryItems.find((it) => it.itemId === item.itemId);

      if (itemToOrder) {
        setUserOrder((prevOrder) => {
          const updatedOrder = { ...prevOrder };

          // checking if category exists in userOrder
          const existingCategory = updatedOrder[category] || [];

          // find item in category
          const existingItem = existingCategory.find(
            (orderItem) => orderItem.itemId === item.itemId
          );

          if (existingItem) {
            // checking action plus/minus
            const newQuantity =
              action === "plus"
                ? existingItem.quantity + 1
                : existingItem.quantity - 1;

            if (newQuantity <= 0) {
              // remove item
              updatedOrder[category] = existingCategory.filter(
                (orderItem) => orderItem.itemId !== item.itemId
              );
            } else {
              // update existing item
              updatedOrder[category] = existingCategory.map((orderItem) =>
                orderItem.itemId === item.itemId
                  ? {
                      ...orderItem,
                      quantity: newQuantity,
                    }
                  : orderItem
              );
            }
          } else if (action === "plus") {
            // if item not exists add to order with quantity = 1
            updatedOrder[category] = [
              ...existingCategory,
              { ...itemToOrder, quantity: 1 },
            ];
          }

          return updatedOrder;
        });
      }
    }
  };

  const handleUserInactivity = () => {
    setSelectedCategory("");
    setFilter("");
    setUserOrder({});
  };

  useEffect(() => {
    let quantity = 0;

    const categories = Object.keys(userOrder);

    categories.map((category) =>
      userOrder[category].map((el) => (quantity += el.quantity))
    );
    setOrderQuantity(quantity);
  }, [userOrder]);

  const handleScroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <>
      <section className={styles.container}>
        {showItemPreview ? (
          <ProductPreview
            showItemPreview={showItemPreview}
            setShowItemPreview={setShowItemPreview}
            setUserOrder={setUserOrder}
            category={selectedCategory}
          />
        ) : (
          <>
            <section className={styles.menu_category_cont}>
              {/* <FontAwesomeIcon
                className={`${styles.icon_left} ${styles.icons}`}
                icon={faAngleLeft}
                onClick={() => handleScroll(-200)}
              />
              <FontAwesomeIcon
                className={`${styles.icon_right} ${styles.icons}`}
                icon={faAngleRight}
                onClick={() => handleScroll(200)}
              /> */}
              <section
                className={`${
                  selectedCategory
                    ? styles.menu_category_mini
                    : styles.menu_category
                }`}
                ref={scrollRef}
              >
                <MenuCategory
                  category="burgers"
                  title="Burgery"
                  bkg={burgerBkg}
                  selectedCategory={selectedCategory}
                  active={selectedCategory === "burgers" ? true : false}
                  onClick={() => {
                    setSelectedCategory("burgers");
                    setFilter("");
                  }}
                />
                <MenuCategory
                  category="coffee"
                  title="McCafé"
                  bkg={coffeeBkg}
                  selectedCategory={selectedCategory}
                  active={selectedCategory === "mccafe" ? true : false}
                  onClick={() => {
                    setSelectedCategory("mccafe");
                    setFilter("");
                  }}
                />
                <MenuCategory
                  category="twoForU"
                  title="2forU"
                  bkg={twoForUBkg}
                  selectedCategory={selectedCategory}
                  active={selectedCategory === "twoForU" ? true : false}
                  onClick={() => {
                    setSelectedCategory("twoForU");
                    setFilter("");
                  }}
                />
                <MenuCategory
                  category="icescream"
                  title="Lody"
                  bkg={iceScreamBkg}
                  selectedCategory={selectedCategory}
                  active={selectedCategory === "icescream" ? true : false}
                  onClick={() => {
                    setSelectedCategory("icescream");
                    setFilter("");
                  }}
                />
                <MenuCategory
                  category="fries"
                  title="Dodatki"
                  bkg={friesBkg}
                  selectedCategory={selectedCategory}
                  active={selectedCategory === "fries" ? true : false}
                  onClick={() => {
                    setSelectedCategory("fries");
                    setFilter("");
                  }}
                />
              </section>
            </section>
            {selectedCategory && (
              <section className={styles.submenu_cont}>
                <section className={styles.submenu_btns}>
                  {menu[selectedCategory].filters.map((el, idx) => (
                    <button
                      key={idx}
                      className={`${styles.submenu_btn} ${
                        filter === el.filterId ? styles.submenu_btn_active : ""
                      }`}
                      onClick={() =>
                        setFilter((prev) =>
                          prev !== el.filterId ? el.filterId : ""
                        )
                      }
                    >
                      <span>{el.filterName}</span>
                      {filter === el.filterId && (
                        <FontAwesomeIcon icon={faXmark} />
                      )}
                    </button>
                  ))}
                </section>

                {/* <section className={styles.submenu}>
                                        {selectedCategory &&
                                            menu[selectedCategory].categoryMenu
                                                .filter(
                                                    (fil) =>
                                                        !filter ||
                                                        fil.tag === filter
                                                )
                                                .map((el, idx) => (
                                                    <SubmenuItem
                                                        key={idx}
                                                        userOrder={userOrder}
                                                        setOrder={setUserOrder}
                                                        category={
                                                            selectedCategory
                                                        }
                                                        item={el}
                                                        addToOrder={addToOrder}
                                                        setShowItemPreview={
                                                            setShowItemPreview
                                                        }
                                                        // borderRight={
                                                        //     // prettier-ignore
                                                        //     idx !== menu[selectedCategory].categoryMenu.length - 1
                                                        //         &&
                                                        //     (idx !== menu[selectedCategory].categoryMenu.length - 2 ||
 idx % 2 !== 0)
                                                        // }
                                                        // borderBottom={
                                                        //     idx % 2 === 0
                                                        // }
                                                        borderRight={true}
                                                        borderBottom={true}
                                                    />
                                                ))}
                                    </section> */}
                <section className={styles.submenu}>
                  {selectedCategory &&
                    (() => {
                      const filteredItems = menu[
                        selectedCategory
                      ].categoryMenu.filter(
                        (fil) => !filter || fil.tag === filter
                      );

                      return filteredItems.map((el, idx) => (
                        <SubmenuItem
                          key={idx}
                          userOrder={userOrder}
                          setOrder={setUserOrder}
                          category={selectedCategory}
                          item={el}
                          addToOrder={addToOrder}
                          setShowItemPreview={setShowItemPreview}
                          borderRight={
                            filteredItems.length <= 2
                              ? false
                              : idx === filteredItems.length - 2
                              ? idx % 2 === 0
                                ? false
                                : true
                              : idx === filteredItems.length - 1
                              ? false
                              : true
                          }
                          borderBottom={
                            filteredItems.length > 1 && idx % 2 === 0
                          }
                        />
                      ));
                    })()}
                </section>
              </section>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Menu;

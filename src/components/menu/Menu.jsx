import { useState } from "react";
import styles from "./Menu.module.css";

import SubmenuItem from "./SubmenuItem";
import MenuCategory from "./MenuCategory";
import useScrollToStart from "../../hooks/useScrollToStart";

import burgerBkg from "../../assets/burgerBkg.jpg";
import twoForUBkg from "../../assets/2foru.jpg";
import iceScreamBkg from "../../assets/icescreamBkg.jpg";
import coffeeBkg from "../../assets/coffeeBkg.jpg";
import friesBkg from "../../assets/friesBkg.jpg";

const Menu = () => {
  const menuRef = useScrollToStart(30000, () => setSelectedCategory("burgers"));
  const menuRef = useScrollToStart(60000, () => setSelectedCategory(""));

  const [selectedCategory, setSelectedCategory] = useState("burgers");
  const [filter, setFilter] = useState("");
  const [userOrder, setUserOrder] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [userOrder, setUserOrder] = useState({
    burgers: [],
  });

  const [menu, setMenu] = useState({
    burgers: [
      {
        itemName: "Big Mac",
        itemId: "bigmac",
        itemPrice: 20.5,
        itemImage: "burgers/bigmac.png",
        tag: "beef",
      },
      {
        itemName: "WieśMac Podwójny",
        itemId: "wiesmac-double",
        itemPrice: 25.9,
        itemImage: "burgers/wiesmac-double.png",
        tag: "beef",
      },
      {
        itemName: "WieśMac",
        itemPrice: 22.2,
        itemImage: "burgers/wiesmac.png",
        tag: "beef",
      },
      {
        itemName: "McRoyal Podwójny",
        itemPrice: 25.9,
        itemImage: "burgers/mcroyal-double.png",
        tag: "beef",
      },
      {
        itemName: "McRoyal",
        itemPrice: 20.2,
        itemImage: "burgers/mcroyal.png",
        tag: "beef",
      },
      {
        itemName: "McCrispy Supreme",
        itemPrice: 24.9,
        itemImage: "burgers/mccrispy-supreme.png",
        tag: "chicken",
      },
      {
        itemName: "McCrispy",
        itemPrice: 20.5,
        itemImage: "burgers/mccrispy.png",
        tag: "chicken",
      },
      {
        itemName: "McChicken",
        itemPrice: 18.9,
        itemImage: "burgers/mcchiken.png",
        tag: "chicken",
      },
      {
        itemName: "Veggie Burger",
        itemPrice: 19.6,
        itemImage: "burgers/veggie-burger.png",
        tag: "vege",
      },
      {
        itemName: "McDouble",
        itemPrice: 9.5,
        itemImage: "burgers/mcdouble.png",
        tag: "beef",
      },
      {
        itemName: "Cheeseburger",
        itemPrice: 6.9,
        itemImage: "burgers/cheeseburger.png",
        tag: "beef",
      },
      {
        itemName: "Hamburger",
        itemPrice: 6.5,
        itemImage: "burgers/hamburger.png",
        tag: "beef",
      },
      {
        itemName: "Jalapeno Burger",
        itemPrice: 6.9,
        itemImage: "burgers/jalapenoburger.png",
        tag: "beef",
      },
      {
        itemName: "Chikker",
        itemPrice: 6.9,
        itemImage: "burgers/chikker.png",
        tag: "chicken",
      },
      {
        itemName: "RedChikker",
        itemPrice: 6.9,
        itemImage: "burgers/red-chikker.png",
        tag: "chicken",
      },
    ],
  });
  const [menu, setMenu] = useState({
    burgers: [
      {
        itemName: "Big Mac",
        itemId: "bigmac",
        itemPrice: 20.5,
        itemImage: "burgers/bigmac.png",
        tag: "beef",
      },
      {
        itemName: "WieśMac Podwójny",
        itemId: "wiesmac-double",
        itemPrice: 25.9,
        itemImage: "burgers/wiesmac-double.png",
        tag: "beef",
      },
      {
        itemName: "WieśMac",
        itemId: "wiesmac",
        itemPrice: 22.2,
        itemImage: "burgers/wiesmac.png",
        tag: "beef",
      },
      {
        itemName: "McRoyal Podwójny",
        itemId: "mcroyal-double",
        itemPrice: 25.9,
        itemImage: "burgers/mcroyal-double.png",
        tag: "beef",
      },
      {
        itemName: "McRoyal",
        itemId: "mcroyal",
        itemPrice: 20.2,
        itemImage: "burgers/mcroyal.png",
        tag: "beef",
      },
      {
        itemName: "McCrispy Supreme",
        itemId: "mccrispy-supreme",
        itemPrice: 24.9,
        itemImage: "burgers/mccrispy-supreme.png",
        tag: "chicken",
      },
      {
        itemName: "McCrispy",
        itemId: "mccrispy",
        itemPrice: 20.5,
        itemImage: "burgers/mccrispy.png",
        tag: "chicken",
      },
      {
        itemName: "McChicken",
        itemId: "mcchicken",
        itemPrice: 18.9,
        itemImage: "burgers/mcchiken.png",
        tag: "chicken",
      },
      {
        itemName: "Veggie Burger",
        itemId: "veggie-burger",
        itemPrice: 19.6,
        itemImage: "burgers/veggie-burger.png",
        tag: "vege",
      },
      {
        itemName: "McDouble",
        itemId: "mcdouble",
        itemPrice: 9.5,
        itemImage: "burgers/mcdouble.png",
        tag: "beef",
      },
      {
        itemName: "Cheeseburger",
        itemId: "cheeseburger",
        itemPrice: 6.9,
        itemImage: "burgers/cheeseburger.png",
        tag: "beef",
      },
      {
        itemName: "Hamburger",
        itemId: "hamburger",
        itemPrice: 6.5,
        itemImage: "burgers/hamburger.png",
        tag: "beef",
      },
      {
        itemName: "Jalapeno Burger",
        itemId: "jalapenoburger",
        itemPrice: 6.9,
        itemImage: "burgers/jalapenoburger.png",
        tag: "beef",
      },
      {
        itemName: "Chikker",
        itemId: "chikker",
        itemPrice: 6.9,
        itemImage: "burgers/chikker.png",
        tag: "chicken",
      },
      {
        itemName: "RedChikker",
        itemId: "redchikker",
        itemPrice: 6.9,
        itemImage: "burgers/red-chikker.png",
        tag: "chicken",
      },
    ],
  });

  const addToOrder = (item, category, action) => {
    // find category in menu
    const categoryItems = menu[category];

    if (categoryItems) {
      const itemToOrder = categoryItems.find(it => it.itemId === item.itemId);

      if (itemToOrder) {
        setUserOrder(prevOrder => {
          const updatedOrder = { ...prevOrder };

          // checking if category exists in userOrder
          const existingCategory = updatedOrder[category] || [];

          // find item in category
          const existingItem = existingCategory.find(
            orderItem => orderItem.itemId === item.itemId
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
                orderItem => orderItem.itemId !== item.itemId
              );
            } else {
              // update existing item
              updatedOrder[category] = existingCategory.map(orderItem =>
                orderItem.itemId === item.itemId
                  ? {
                      ...orderItem,
                      quantity: newQuantity,
                    }
                  : orderItem
              );
            }
          } else if (action === "plus") {
            // if item not exists add to order with quantify = 1
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

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Menu</h1>
      <section className={styles.menu_category_cont}>
        <section
          className={` ${
            selectedCategory ? styles.menu_category_mini : styles.menu_category
          }`}
          ref={menuRef}
        >
          <MenuCategory
            category="burgers"
            title="Burgery"
            bkg={burgerBkg}
            selectedCategory={selectedCategory}
            active={selectedCategory === "burgers" ? true : false}
            onClick={() => setSelectedCategory("burgers")}
          />
          <MenuCategory
            category="2foru"
            title="2forU"
            bkg={twoForUBkg}
            selectedCategory={selectedCategory}
            active={selectedCategory === "2foru" ? true : false}
            onClick={() => setSelectedCategory("2foru")}
          />
          <MenuCategory
            category="icescream"
            title="Lody"
            bkg={iceScreamBkg}
            selectedCategory={selectedCategory}
            active={selectedCategory === "icescream" ? true : false}
            onClick={() => setSelectedCategory("icescream")}
          />
          <MenuCategory
            category="coffee"
            title="Kawa"
            bkg={coffeeBkg}
            selectedCategory={selectedCategory}
            active={selectedCategory === "coffee" ? true : false}
            onClick={() => setSelectedCategory("coffee")}
          />
          <MenuCategory
            category="fries"
            title="Dodatki"
            bkg={friesBkg}
            selectedCategory={selectedCategory}
            active={selectedCategory === "fries" ? true : false}
            onClick={() => setSelectedCategory("fries")}
          />
        </section>
      </section>
      {selectedCategory && (
        <section className={styles.submenu_cont}>
          <section className={styles.submenu_btns}>
            <button
              className={`${styles.submenu_btn} ${
                filter === "beef" ? styles.submenu_btn_active : ""
              }`}
              onClick={() => setFilter(prev => (prev !== "beef" ? "beef" : ""))}
            >
              Wołowina
            </button>
            <button
              className={`${styles.submenu_btn} ${
                filter === "chicken" ? styles.submenu_btn_active : ""
              }`}
              onClick={() =>
                setFilter(prev => (prev !== "chicken" ? "chicken" : ""))
              }
            >
              Kurczak
            </button>
            <button
              className={`${styles.submenu_btn} ${
                filter === "vege" ? styles.submenu_btn_active : ""
              }`}
              onClick={() => setFilter(prev => (prev !== "vege" ? "vege" : ""))}
            >
              Wege
            </button>
          </section>

          <section className={styles.submenu}>
            {menu.burgers
              .filter(fil => !filter || fil.tag === filter)
              .map((el, idx) => (
                <SubmenuItem
                  key={idx}
                  userOrder={userOrder}
                  setOrder={setUserOrder}
                  category="burgers"
                  item={el}
                  addToOrder={addToOrder}
                />
              ))}
          </section>
        </section>
      )}
    </section>
  );
};

export default Menu;

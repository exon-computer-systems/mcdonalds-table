import { useRef, useState } from "react";
import styles from "./Menu.module.css";

import SubmenuItem from "./SubmenuItem";
import MenuCategory from "./MenuCategory";
import useScrollToStart from "../../hooks/useScrollToStart";

import burgerBkg from "../../assets/burgerBkg.jpg";
import twoForUBkg from "../../assets/2foru.jpg";
import iceScreamBkg from "../../assets/icescreamBkg.jpg";
import coffeeBkg from "../../assets/coffeeBkg.jpg";
import friesBkg from "../../assets/friesBkg.jpg";
import ProductPreview from "./ProductPreview";

const Menu = () => {
    // const menuRef = useScrollToStart(60000, () => handleUserInactivity());
    const menuRef = useRef();

    const [showPreview, setShowPreview] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filter, setFilter] = useState("");
    const [userOrder, setUserOrder] = useState({});

    const [menu, setMenu] = useState({
        burgers: {
            filters: [
                {
                    filterName: "Wołowina",
                    filterId: "beef",
                },
                {
                    filterName: "Kurczak",
                    filterId: "chicken",
                },
                {
                    filterName: "Wege",
                    filterId: "vege",
                },
            ],
            categoryMenu: [
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
        },
        mccafe: {
            filters: [
                {
                    filterName: "Mrożona",
                    filterId: "iced",
                },
                {
                    filterName: "Klasyczna",
                    filterId: "classic",
                },
                {
                    filterName: "Smakowa",
                    filterId: "flavored",
                },
                {
                    filterName: "Herbata",
                    filterId: "tea",
                },
            ],
            categoryMenu: [
                {
                    itemName: "Iced Raspberry & White Choco Latte",
                    itemId: "iced-raspberry-latte",
                    itemPrice: 15.9,
                    itemImage: "mccafe/iced-raspberry-latte.png",
                    tag: "iced",
                },
                {
                    itemName: "Iced Caramel Latte",
                    itemId: "iced-caramel-latte",
                    itemPrice: 15.9,
                    itemImage: "mccafe/iced-latte.png",
                    tag: "iced",
                },
                {
                    itemName: "Iced Latte",
                    itemId: "iced-latte",
                    itemPrice: 14.9,
                    itemImage: "mccafe/iced-latte.png",
                    tag: "iced",
                },
                {
                    itemName: "Café Latte",
                    itemId: "cafe-latte",
                    itemPrice: 12.9,
                    itemImage: "mccafe/cafe-latte.png",
                    tag: "classic",
                    size: "s",
                    capacity: 0.2,
                    options: {
                        small: {
                            size: "s",
                            capacity: 0.2,
                            itemPrice: 12.9,
                        },
                        medium: {
                            size: "m",
                            capacity: 0.3,
                            itemPrice: 13.9,
                        },
                        large: {
                            size: "l",
                            capacity: 0.4,
                            itemPrice: 14.9,
                        },
                    },
                },
                {
                    itemName: "Cappuccino",
                    itemId: "cappuccino",
                    itemPrice: 6.6,
                    itemImage: "mccafe/cappuccino.png",
                    tag: "classic",
                    size: "s",
                    capacity: 0.2,
                    options: {
                        small: {
                            size: "s",
                            capacity: 0.2,
                            itemPrice: 6.6,
                        },
                        medium: {
                            size: "m",
                            capacity: 0.3,
                            itemPrice: 11.6,
                        },
                        large: {
                            size: "l",
                            capacity: 0.4,
                            itemPrice: 12.6,
                        },
                    },
                },
                {
                    itemName: "Flat White",
                    itemId: "flat-white",
                    itemPrice: 12.9,
                    itemImage: "mccafe/flat-white.png",
                    tag: "classic",
                },
                {
                    itemName: "Kawa z mlekiem",
                    itemId: "coffee-milk",
                    itemPrice: 10.2,
                    itemImage: "mccafe/coffee-milk.png",
                    tag: "classic",
                },
                {
                    itemName: "Kawa czarna",
                    itemId: "coffee-black",
                    itemPrice: 9.2,
                    itemImage: "mccafe/coffee-black.png",
                    tag: "classic",
                },
                {
                    itemName: "Espresso",
                    itemId: "espresso",
                    itemPrice: 7.4,
                    itemImage: "mccafe/espresso.png",
                    tag: "classic",
                },
                {
                    itemName: "Caramel Latte Macchiato",
                    itemId: "caramel-latte-macchiato",
                    itemPrice: 16.6,
                    itemImage: "mccafe/caramel-latte-macchiato.png",
                    tag: "flavored",
                },
                {
                    itemName: "Choco Latte Macchiato",
                    itemId: "choco-latte-macchiato",
                    itemPrice: 16.6,
                    itemImage: "mccafe/choco-latte-macchiato.png",
                    tag: "flavored",
                },
                {
                    itemName: "Herbata",
                    itemId: "tea",
                    itemPrice: 9.4,
                    itemImage: "mccafe/tea.png",
                    tag: "tea",
                },
            ],
        },
    });

    const addToOrder = (item, category, action) => {
        // find category in menu
        const categoryItems = menu[category].categoryMenu;

        if (categoryItems) {
            const itemToOrder = categoryItems.find(
                (it) => it.itemId === item.itemId
            );

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
                            updatedOrder[category] = existingCategory.map(
                                (orderItem) =>
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

    const handleUserInactivity = () => {
        setSelectedCategory("");
        setFilter("");
        setUserOrder({});
    };

    return (
        <section className={styles.container}>
            <h1
                className={styles.heading}
                onClick={() => console.log(userOrder)}
            >
                Menu
            </h1>

            {showPreview ? (
                <ProductPreview setShowPreview={setShowPreview} />
            ) : (
                <>
                    <section className={styles.menu_category_cont}>
                        <section
                            className={` ${
                                selectedCategory
                                    ? styles.menu_category_mini
                                    : styles.menu_category
                            }`}
                            ref={menuRef}
                        >
                            <MenuCategory
                                category="burgers"
                                title="Burgery"
                                bkg={burgerBkg}
                                selectedCategory={selectedCategory}
                                active={
                                    selectedCategory === "burgers"
                                        ? true
                                        : false
                                }
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
                                active={
                                    selectedCategory === "mccafe" ? true : false
                                }
                                onClick={() => {
                                    setSelectedCategory("mccafe");
                                    setFilter("");
                                }}
                            />
                            <MenuCategory
                                category="2foru"
                                title="2forU"
                                bkg={twoForUBkg}
                                selectedCategory={selectedCategory}
                                active={
                                    selectedCategory === "2foru" ? true : false
                                }
                                onClick={() => {
                                    setSelectedCategory("2foru");
                                    setFilter("");
                                }}
                            />
                            <MenuCategory
                                category="icescream"
                                title="Lody"
                                bkg={iceScreamBkg}
                                selectedCategory={selectedCategory}
                                active={
                                    selectedCategory === "icescream"
                                        ? true
                                        : false
                                }
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
                                active={
                                    selectedCategory === "fries" ? true : false
                                }
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
                                {menu[selectedCategory].filters.map(
                                    (el, idx) => (
                                        <button
                                            key={idx}
                                            className={`${styles.submenu_btn} ${
                                                filter === el.filterId
                                                    ? styles.submenu_btn_active
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setFilter((prev) =>
                                                    prev !== el.filterId
                                                        ? el.filterId
                                                        : ""
                                                )
                                            }
                                        >
                                            {el.filterName}
                                        </button>
                                    )
                                )}
                            </section>

                            <section className={styles.submenu}>
                                {menu[selectedCategory].categoryMenu
                                    .filter(
                                        (fil) => !filter || fil.tag === filter
                                    )
                                    .map((el, idx) => (
                                        <SubmenuItem
                                            key={idx}
                                            userOrder={userOrder}
                                            setOrder={setUserOrder}
                                            category={selectedCategory}
                                            item={el}
                                            addToOrder={addToOrder}
                                            setShowPreview={setShowPreview}
                                        />
                                    ))}
                            </section>
                        </section>
                    )}
                </>
            )}
        </section>
    );
};

export default Menu;

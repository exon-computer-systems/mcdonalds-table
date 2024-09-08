import { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.css";
import MenuCategory from "./MenuCategory";
import burgerBkg from "../../assets/burgerBkg.jpg";
import twoForUBkg from "../../assets/2foru.jpg";
import iceScreamBkg from "../../assets/icescreamBkg.jpg";
import coffeeBkg from "../../assets/coffeeBkg.jpg";
import friesBkg from "../../assets/friesBkg.jpg";

import useScrollToStart from "../../hooks/useScrollToStart";

const Menu = () => {
    const menuRef = useScrollToStart(30000, () =>
        setSelectedCategory("burgers")
    );

    const [selectedCategory, setSelectedCategory] = useState("burgers");

    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>Menu</h1>
            <section className={styles.menu_category} ref={menuRef}>
                <MenuCategory
                    category="burgers"
                    title="Burgery"
                    bkg={burgerBkg}
                    active={selectedCategory === "burgers" ? true : false}
                    onClick={() => {
                        console.log("burgers" === selectedCategory);
                        setSelectedCategory("burgers");
                    }}
                />
                <MenuCategory
                    category="2foru"
                    title="2forU"
                    bkg={twoForUBkg}
                    active={selectedCategory === "2foru" ? true : false}
                    onClick={() => setSelectedCategory("2foru")}
                />
                <MenuCategory
                    category="icescream"
                    title="Lody"
                    bkg={iceScreamBkg}
                    active={selectedCategory === "icescream" ? true : false}
                    onClick={() => setSelectedCategory("icescream")}
                />
                <MenuCategory
                    category="coffee"
                    title="Kawa"
                    bkg={coffeeBkg}
                    active={selectedCategory === "coffee" ? true : false}
                    onClick={() => setSelectedCategory("coffee")}
                />
                <MenuCategory
                    category="fries"
                    title="Dodatki"
                    bkg={friesBkg}
                    active={selectedCategory === "fries" ? true : false}
                    onClick={() => setSelectedCategory("fries")}
                />
            </section>
        </section>
    );
};

export default Menu;

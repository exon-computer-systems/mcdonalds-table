import { useState } from "react";
import styles from "./Menu.module.css";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("burgers");

    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>Menu</h1>
            <section className={styles.menu_category}>
                <MenuCategory
                    category="burgers"
                    title="Burgery"
                    active={selectedCategory === "burgers" ? true : false}
                    onClick={() => {
                        console.log("burgers" === selectedCategory);
                        setSelectedCategory("burgers");
                    }}
                />
                <MenuCategory
                    category="2foru"
                    title="2forU"
                    active={selectedCategory === "2foru" ? true : false}
                    onClick={() => setSelectedCategory("2foru")}
                />
                <MenuCategory
                    category="icescream"
                    title="Lody"
                    active={selectedCategory === "icescream" ? true : false}
                    onClick={() => setSelectedCategory("icescream")}
                />
                <MenuCategory
                    category="coffee"
                    title="Kawa"
                    active={selectedCategory === "coffee" ? true : false}
                    onClick={() => setSelectedCategory("coffee")}
                />
                <MenuCategory
                    category="fries"
                    title="Dodatki"
                    active={selectedCategory === "fries" ? true : false}
                    onClick={() => setSelectedCategory("fries")}
                />
            </section>
        </section>
    );
};

export default Menu;

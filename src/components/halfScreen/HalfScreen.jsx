import React from "react";
import styles from "./HalfScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
const HalfScreen = () => {
    return (
        <section className={styles.half}>
            <Menu />
            {/* <ShoppingCart /> */}
            {/* <Promotions /> */}
            {/* <Messages /> */}
        </section>
    );
};

export default HalfScreen;

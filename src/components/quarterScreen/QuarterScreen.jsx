import React from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";

const QuarterScreen = () => {
  return (
    <section className={styles.quarter}>
      {/* <Menu /> */}
      <ShoppingCart />
      {/* <Promotions /> */}
      {/* <Messages /> */}
    </section>
  );
};

export default QuarterScreen;

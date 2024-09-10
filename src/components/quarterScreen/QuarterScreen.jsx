import React from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import MainMenu from "../mainMenu/MainMenu";

const QuarterScreen = () => {
  return (
    <section className={styles.quarter}>
      <MainMenu />
      <Menu />
      {/* <ShoppingCart /> */}
      {/* <Promotions /> */}
      {/* <Messages /> */}
    </section>
  );
};

export default QuarterScreen;

import React from "react";
import styles from "./HalfScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import MainMenu from "../mainMenu/MainMenu";
const HalfScreen = () => {
  return (
    <section className={styles.half}>
      <MainMenu />
      <Menu />
      {/* <ShoppingCart /> */}
      {/* <Promotions /> */}
      {/* <Messages /> */}
    </section>
  );
};

export default HalfScreen;

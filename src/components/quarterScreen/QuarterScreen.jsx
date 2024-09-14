import React, { useState } from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Navigation from "../navigation/Navigation";
import Application from "../application/Application";
import MemoryGame from "../memoryGame/MemoryGame";

const QuarterScreen = () => {
  const [activeComponent, setActiveComponent] = useState("menu");
  const switchComponent = componentName => {
    switch (componentName) {
      case "menu":
        setActiveComponent("menu");
        break;
      case "promotions":
        setActiveComponent("promotions");
        break;
      case "messages":
        setActiveComponent("messages");
        break;
      case "application":
        setActiveComponent("application");
        break;
      case "game":
        setActiveComponent("game");
        break;
      default:
        setActiveComponent("game");
    }
  };
  return (
    <section className={styles.quarter}>
      <Navigation switchComponent={switchComponent} />

      {activeComponent === "menu" && <Menu />}
      {activeComponent === "promotions" && <Promotions />}
      {activeComponent === "messages" && <Messages />}
      {activeComponent === "application" && <Application />}
      {activeComponent === "game" && <MemoryGame />}
    </section>
  );
};

export default QuarterScreen;

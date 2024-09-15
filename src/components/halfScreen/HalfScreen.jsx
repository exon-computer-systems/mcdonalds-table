import React, { useState } from "react";
import styles from "./HalfScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Navigation from "../navigation/Navigation";
import Application from "../application/Application";
import MemoryGame from "../memoryGame/MemoryGame";
const HalfScreen = () => {
    const [activeComponent, setActiveComponent] = useState("menu");
    const switchComponent = (componentName) => {
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
            case "games":
                setActiveComponent("games");
                break;
            default:
                setActiveComponent("menu");
        }
    };
    return (
        <section className={styles.half}>
            <Navigation switchComponent={switchComponent} />
            {activeComponent === "menu" && <Menu />}
            {activeComponent === "promotions" && <Promotions />}
            {activeComponent === "messages" && <Messages />}
            {activeComponent === "application" && <Application />}
            {activeComponent === "games" && <MemoryGame />}
        </section>
    );
};

export default HalfScreen;

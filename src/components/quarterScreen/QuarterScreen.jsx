import React, { useState } from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Navigation from "../navigation/Navigation";
import Application from "../application/Application";

import bg from "../../assets/mcBg-small.jpg";
import bgGrey from "../../assets/mcBg-small-grey.jpg";

const QuarterScreen = () => {
    const [activeComponent, setActiveComponent] = useState("menu");
    const switchComponent = (componentName) => {
        switch (componentName) {
            case "menu":
                setActiveComponent("menu");
                break;
            case "shoppingCart":
                setActiveComponent("shoppingCart");
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
            default:
                setActiveComponent("menu");
        }
    };
    return (
        <section
            className={styles.quarter}
            // style={{ backgroundImage: `url(${bg})` }}
        >
            <Navigation switchComponent={switchComponent} />

            {activeComponent === "menu" && <Menu />}
            {activeComponent === "shoppingCart" && <ShoppingCart />}
            {activeComponent === "promotions" && <Promotions />}
            {activeComponent === "messages" && <Messages />}
            {activeComponent === "application" && <Application />}
        </section>
    );
};

export default QuarterScreen;

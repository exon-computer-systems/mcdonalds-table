import React, { useEffect, useState } from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Navigation from "../navigation/Navigation";
import Application from "../application/Application";
import MemoryGame from "../memoryGame/MemoryGame";
import Nav from "../nav/Nav";
import Inactive from "../inactive/Inactive";

const QuarterScreen = ({
    rotate,
    enlargeLeft,
    enlargeRight,
    leftSectionFlex,
    rightSectionFlex,
    reset,
    size1,
    size2,
}) => {
    const [showCart, setShowCart] = useState(false);
    const [orderQuantity, setOrderQuantity] = useState(0);

    const [activeComponent, setActiveComponent] = useState("menu");
    const [activeTitle, setActiveTitle] = useState("Menu");
    const switchComponent = (componentName) => {
        switch (componentName) {
            case "menu":
                setActiveComponent("menu");
                setActiveTitle("Menu");
                break;
            case "promotions":
                setActiveComponent("promotions");
                setActiveTitle("Promocje");
                break;
            case "messages":
                setActiveComponent("messages");
                setActiveTitle("Wybierz stół");
                break;
            case "application":
                setActiveComponent("application");
                setActiveTitle("Pobierz naszą aplikację");
                break;
            case "games":
                setActiveComponent("games");
                setActiveTitle("Gry");
                break;
            default:
                setActiveComponent("menu");
                setActiveTitle("Menu");
        }
    };

    return (
        <section
            className={`${styles.screen} ${rotate && styles.rotate}`}
            style={{
                flex: leftSectionFlex ? leftSectionFlex : rightSectionFlex,
            }}
        >
            {size1 === size2 ? (
                <>
                    <Nav
                        title={activeTitle}
                        enlarge={enlargeLeft ? enlargeLeft : enlargeRight}
                        reset={reset}
                        size={
                            leftSectionFlex ? leftSectionFlex : rightSectionFlex
                        }
                        setShowCart={setShowCart}
                        orderQuantity={orderQuantity}
                    />
                    <Navigation switchComponent={switchComponent} />
                    <section className={styles.content}>
                        {activeComponent === "menu" && (
                            <Menu
                                enlarge={
                                    enlargeLeft ? enlargeLeft : enlargeRight
                                }
                                reset={reset}
                                size={
                                    leftSectionFlex
                                        ? leftSectionFlex
                                        : rightSectionFlex
                                }
                                showCart={showCart}
                                setShowCart={setShowCart}
                                orderQuantity={orderQuantity}
                                setOrderQuantity={setOrderQuantity}
                            />
                        )}
                        {activeComponent === "promotions" && <Promotions />}
                        {activeComponent === "messages" && <Messages />}
                        {activeComponent === "application" && <Application />}
                        {activeComponent === "games" && <MemoryGame />}
                    </section>
                </>
            ) : size1 > size2 ? (
                <>
                    <Nav
                        title={activeTitle}
                        enlarge={enlargeLeft ? enlargeLeft : enlargeRight}
                        reset={reset}
                        size={
                            leftSectionFlex ? leftSectionFlex : rightSectionFlex
                        }
                    />
                    <Navigation switchComponent={switchComponent} />
                    <section className={styles.content}>
                        {activeComponent === "menu" && (
                            <Menu
                                enlarge={
                                    enlargeLeft ? enlargeLeft : enlargeRight
                                }
                                reset={reset}
                                size={
                                    leftSectionFlex
                                        ? leftSectionFlex
                                        : rightSectionFlex
                                }
                            />
                        )}
                        {activeComponent === "promotions" && <Promotions />}
                        {activeComponent === "messages" && <Messages />}
                        {activeComponent === "application" && <Application />}
                        {activeComponent === "games" && <MemoryGame />}
                    </section>
                </>
            ) : (
                <Inactive handleClick={reset} />
            )}
        </section>
    );
};

export default QuarterScreen;

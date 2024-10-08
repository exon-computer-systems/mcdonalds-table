import React, { useEffect, useRef, useState } from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
import Messages from "../messages/Messages";
import Navigation from "../navigation/Navigation";
import Application from "../application/Application";
import MemoryGame from "../memoryGame/MemoryGame";
import Header from "../header/Header";
import Inactive from "../inactive/Inactive";
import Cart from "../cart/Cart";
import { messages as messagesData } from "../../data/messages";
import useMessage from "../../hooks/useMessage";

const QuarterScreen = ({
  id,
  enlargeLeft,
  enlargeRight,
  leftSectionFlex,
  rightSectionFlex,
  reset,
  size1,
  size2,
}) => {
  const timeoutRef = useRef();

  const { usersMessage, addMessage } = useMessage();

  const [showCart, setShowCart] = useState(false);
  const [showItemPreview, setShowItemPreview] = useState(false);
  const [activeChatBox, setActiveChatBox] = useState(false);

  const [userOrder, setUserOrder] = useState({});
  const [orderQuantity, setOrderQuantity] = useState(0);

  const [activeComponent, setActiveComponent] = useState("menu");
  const [activeTitle, setActiveTitle] = useState("Menu");

  const switchComponent = componentName => {
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
        setActiveTitle("Pobierz naszą apkę");
        break;
      case "games":
        setActiveComponent("games");
        setActiveTitle("Gry");
        break;
      case "cart":
        setActiveComponent("cart");
        setActiveTitle("Koszyk");
        break;
      default:
        setActiveComponent("menu");
        setActiveTitle("Menu");
    }
  };

  const handleClosePopup = e => {
    e.stopPropagation();
    setActiveChatBox(false);
  };

  // function to get messages after random time between 2-3 minutes
  useEffect(() => {
    let randomText =
      messagesData.text[Math.floor(Math.random() * messagesData.text.length)];
    let randomEmoji =
      messagesData.emojis[
        Math.floor(Math.random() * messagesData.emojis.length)
      ];

    // console.log([id]);
    const callMessage = () => {
      console.log("Function call");
      addMessage([id], {
        author: `Stół ${Math.floor(
          Math.random() * 8 + 1
        )}, użytkownik ${Math.floor(Math.random() * 4 + 1)}`,
        message: `${randomText} ${randomEmoji}`,
      });
    };

    // setting timeout
    timeoutRef.current = setTimeout(
      callMessage,
      Math.floor(Math.random() * (180000 - 120000 + 1) + 120000)
    );
    // timeoutRef.current = setTimeout(
    //     callMessage,
    //     // Math.floor(Math.random() * (5000 - 4999 + 1) + 4999)
    //     5000
    // );

    // cleanup function to clear timeout
    return () => clearTimeout(timeoutRef.current);
  }, [usersMessage]);

  return (
    <section
      key={id}
      className={`${styles.screen} ${id % 2 !== 0 && styles.rotated}`}
      // className={`${styles.screen}`}
      style={{
        flex: leftSectionFlex ? leftSectionFlex : rightSectionFlex,
      }}
      // onClick={handleClosePopup}
      onClick={() => {
        console.log(size2, size1);
      }}
    >
      {size1 === size2 || size1 > size2 ? (
        <>
          <Header
            id={id}
            title={activeTitle}
            enlarge={enlargeLeft ? enlargeLeft : enlargeRight}
            reset={reset}
            size={leftSectionFlex ? leftSectionFlex : rightSectionFlex}
            setShowCart={setShowCart}
            orderQuantity={orderQuantity}
            switchComponent={switchComponent}
            activeChatBox={activeChatBox}
            setActiveChatBox={setActiveChatBox}
          />
          <Navigation switchComponent={switchComponent} />
          <section className={`${styles.content}`}>
            {activeComponent === "menu" && (
              <Menu
                enlarge={enlargeLeft ? enlargeLeft : enlargeRight}
                reset={reset}
                size={leftSectionFlex ? leftSectionFlex : rightSectionFlex}
                showCart={showCart}
                setShowCart={setShowCart}
                orderQuantity={orderQuantity}
                setOrderQuantity={setOrderQuantity}
                userOrder={userOrder}
                setUserOrder={setUserOrder}
                showItemPreview={showItemPreview}
                setShowItemPreview={setShowItemPreview}
              />
            )}
            {activeComponent === "cart" && (
              <Cart
                userOrder={userOrder}
                setShowCart={setShowCart}
                setUserOrder={setUserOrder}
                setShowItemPreview={setShowItemPreview}
                switchComponent={switchComponent}
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

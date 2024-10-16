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
import Backdrop from "../backdrop/Backdrop";

const QuarterScreen = ({ id, reset, enlarge, size, isReduced, isSingle }) => {
  const timeoutRef = useRef();

  const { usersMessage, addMessage } = useMessage();

  const [showCart, setShowCart] = useState(false);
  const [showItemPreview, setShowItemPreview] = useState(false);
  const [activeChatBox, setActiveChatBox] = useState(false);
  const [activePanel, setActivePanel] = useState(false);
  const [userOrder, setUserOrder] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(0);

  const [activeComponent, setActiveComponent] = useState("menu");
  const [activeTitle, setActiveTitle] = useState("Menu");
  const open = () => {
    setActivePanel(true);
  };
  const close = () => {
    setActivePanel(false);
  };
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

  const handleClosePopup = (e) => {
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
        table: Math.floor(Math.random() * 8 + 1),
        seat: Math.floor(Math.random() * 4 + 1),
        // author: `Stół ${Math.floor(
        //   Math.random() * 8 + 1
        // )}, użytkownik ${Math.floor(Math.random() * 4 + 1)}`,
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

  // console.log(size);

  return (
    <section
      key={id}
      className={`${styles.screen} ${id % 2 !== 0 && styles.rotated}`}
      // className={`${styles.screen}`}
      style={{
        flex: size,
      }}
      onClick={handleClosePopup}
    >
      {!isReduced ? (
        <>
          {activePanel && <Backdrop onClick={close} />}
          <Header
            id={id}
            title={activeTitle}
            // enlarge={enlargeLeft ? enlargeLeft : enlargeRight}
            enlarge={enlarge}
            reset={reset}
            size={size}
            setShowCart={setShowCart}
            orderQuantity={orderQuantity}
            switchComponent={switchComponent}
            activeChatBox={activeChatBox}
            setActiveChatBox={setActiveChatBox}
            isSingle={isSingle}
            setSelectedCategory={setSelectedCategory}
          />
          <Navigation
            switchComponent={switchComponent}
            open={open}
            close={close}
          />
          <section className={`${styles.content}`}>
            {activeComponent === "menu" && (
              <Menu
                setOrderQuantity={setOrderQuantity}
                userOrder={userOrder}
                setUserOrder={setUserOrder}
                showItemPreview={showItemPreview}
                setShowItemPreview={setShowItemPreview}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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
            {activeComponent === "promotions" && (
              <Promotions open={open} close={close} />
            )}
            {activeComponent === "messages" && <Messages id={id} />}
            {activeComponent === "application" && <Application />}
            {activeComponent === "games" && <MemoryGame />}
          </section>
        </>
      ) : (
        <Inactive reset={reset} setActiveComponent={setActiveComponent} />
      )}
    </section>
  );
};

export default QuarterScreen;

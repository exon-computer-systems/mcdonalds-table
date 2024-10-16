import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";

import papperBag from "../../assets/papper-bag-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCommentDots,
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Popup from "./Popup";
import { messages as messagesData } from "../../data/messages";
import useMessage from "../../hooks/useMessage";
import { v4 as uuidv4 } from "uuid";
import { database, set, ref, onValue } from "../../../firebase";
import AlertMsg from "../alertMsg/AlertMsg";

// prettier-ignore
const Header = ({id, title, orderQuantity, enlarge, reset, size, switchComponent, activeChatBox, setActiveChatBox, isSingle}) => {
    const buttonRef = useRef();
    const activeChatBoxRef = useRef();
    const timeoutRef = useRef();
    const {usersMessage} = useMessage();
    const [activeWaiter, setActiveWaiter] = useState(false);
    const [statusId, setStatusId] = useState(null); 
    const [alert, setAlert] = useState({ type: "", message: "" });


    useEffect(() => {
        let timeout;
        if (activeWaiter) {
            timeout = setTimeout(() => {
                setActiveWaiter(false);
            }, 30000);
        } else {
            clearTimeout(timeout);
        }
    }, [activeWaiter]);

    useEffect(() => {
        activeChatBoxRef.current = activeChatBox;
    }, [activeChatBox])

    // const pushStatusToFirebase = (id, status) => {
    //     const statusData = { 
    //         table: 1, 
    //         seat: id, 
    //         message: status, 
    //         isDone: false}
    //     console.log(statusData)
    //     set(ref(database, `status/${uuidv4()}`), statusData);
        
    // }

    const pushStatusToFirebase = (id, status) => {

        setAlert({});

        const statusData = { 
            table: 1, 
            seat: id, 
            message: status, 
            isDone: false
        };
        
        const newStatusId = uuidv4();  
        set(ref(database, `status/${newStatusId}`), statusData);  
        setStatusId(newStatusId);

        // Start listening for changes in isDone field
        const statusRef = ref(database, `status/${newStatusId}`);
        onValue(statusRef, (snapshot) => {
            const data = snapshot.val();
            if (data && data.isDone) {
                setAlert({type: "success", message: "Kelner przyjął zawiadomienie" })
                setActiveWaiter(false)
                console.log(`Status with ID ${newStatusId} is done.`);
            }
        });
    }

    const callWaiter = (id, status) => {
        setActiveWaiter(prev => {
            if (!prev) {
                timeoutRef.current = setTimeout(() => pushStatusToFirebase(id, status), 10000);
            }
            else {
                clearTimeout(timeoutRef.current);
            }
            return !prev;
        });
    }
    

    return (
        <>

        {
            alert.message && <AlertMsg alertType={alert.type}>{alert.message}</AlertMsg>
        }

        <header className={styles.heading_cont}>
            <h1 className={styles.heading}>{title}</h1>
            {/* reverse row */}
            <section className={styles.heading_btns}>
                {/* Resize button depends on current size */}

                {
  !isSingle ? (
    <button className={styles.btn_cont} onClick={enlarge}>
      <span className={styles.btn}>
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
      </span>
      <p className={styles.btn_text}>Powiększ</p>
    </button>
  ) : (
    null
  )
}
                

                {/* Call waiter button */}
                <button
                    className={styles.btn_cont}
                    onClick={() => callWaiter(id, "Rachunek")}
                >
                    <span
                        className={`${styles.btn} ${
                            activeWaiter && styles.btn_anim
                        }`}
                    >
                        <FontAwesomeIcon icon={faUserTie} />
                    </span>
                    {activeWaiter ? (
                        <p
                            className={`${styles.btn_text} ${styles.btn_text_anim}`}
                        >
                            Oczekiwanie
                        </p>
                    ) : (
                        <p className={styles.btn_text}>Kelner</p>
                    )}
                </button>

                {/* Chat button */}
                <button className={styles.btn_cont} 
                    onClick={(e) => { 
                        console.log("active popup");
                        e.stopPropagation();
                        setActiveChatBox(prev => !prev);
                        
                    }} 
                    ref={buttonRef}
                >
                    <span className={styles.btn}>
                        <FontAwesomeIcon icon={faCommentDots} />
                        {usersMessage["seat" + id].messages.length > 0 && <span className={styles.message_not}></span>}
                    </span>
                    <p className={styles.btn_text}>Czat</p>
                    
                    
                    {activeChatBox && 
                    <Popup 
                        id={id}
                        switchComponent={switchComponent} 
                        // setActiveChatBox={setActiveChatBox} 
                    />}
                </button>

                {/* Menu button */}
                <button className={styles.btn_cont} onClick={() => switchComponent("menu")}>
                    <span className={styles.btn}>
                        <FontAwesomeIcon icon={faBurger} />
                    </span>
                    <p className={styles.btn_text}>Menu</p>
                </button>

                {/* Cart button */}
                <button
                    className={styles.btn_cont}
                    // onClick={() => setShowCart(true)}
                    onClick={() => switchComponent("cart")}
                >
                    <span className={styles.cart}>
                        <img
                            className={styles.cart_icon}
                            src={papperBag}
                            alt="shopping cart icon"
                        />
                        {orderQuantity > 0 && (
                            <span className={styles.cart_quantity}>
                                {orderQuantity}
                            </span>
                        )}
                    </span>
                    <p className={styles.btn_text}>Koszyk</p>
                </button>
            </section>
        </header>
        </>
    );
};

export default Header;

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

import papperBag from "../../assets/papper-bag-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentDots,
    faDownLeftAndUpRightToCenter,
    faUpRightAndDownLeftFromCenter,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({
    title,
    orderQuantity,
    setShowCart,
    enlarge,
    reset,
    size,
}) => {
    const [activeWaiter, setActiveWaiter] = useState(false);

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

    return (
        <header className={styles.heading_cont}>
            <h1 className={styles.heading}>{title}</h1>
            <section className={styles.heading_btns}>
                {size === 1 ? (
                    <button className={styles.btn_cont} onClick={enlarge}>
                        <span className={styles.btn}>
                            <FontAwesomeIcon
                                icon={faUpRightAndDownLeftFromCenter}
                            />
                        </span>
                        <p className={styles.btn_text}>Powiększ</p>
                    </button>
                ) : (
                    <button className={styles.btn_cont} onClick={reset}>
                        <span className={styles.btn}>
                            <FontAwesomeIcon
                                icon={faDownLeftAndUpRightToCenter}
                            />
                        </span>
                        <p className={styles.btn_text}>Pomniejsz</p>
                    </button>
                )}
                <button
                    className={styles.btn_cont}
                    onClick={() => setActiveWaiter((prev) => !prev)}
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
                <button className={styles.btn_cont}>
                    <span className={styles.btn}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <p className={styles.btn_text}>Czat</p>
                    {/* {orderQuantity > 0 && (
                        <span className={styles.cart_quantity}>
                            {orderQuantity}
                        </span>
                    )} */}
                </button>
                <button
                    className={styles.btn_cont}
                    onClick={() => setShowCart(true)}
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
    );
};

export default Header;

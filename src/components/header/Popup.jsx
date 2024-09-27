import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";

import avatar from "../../assets/avatar2.png";

const Popup = ({ switchComponent, messages, setActiveChatBox, buttonRef }) => {
    const ref = useRef(0);

    const [activeMessages, setActiveMessages] = useState([]);

    useEffect(() => {
        setActiveMessages(messages);
    }, [messages]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                ref.current &&
                !ref.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setActiveChatBox(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [setActiveChatBox, buttonRef]);

    return (
        <section className={styles.pp_cont} ref={ref}>
            <button
                className={styles.pp_button}
                onClick={() => switchComponent("messages")}
            >
                Wyślij wiadomość
            </button>
            <section className={styles.pp_messages}>
                {activeMessages.length > 0 &&
                    activeMessages.map((el, idx) => (
                        <section
                            className={`${styles.pp_message_cont} ${
                                idx < activeMessages.length - 1 &&
                                styles.pp_border_bottom
                            }`}
                            key={idx}
                        >
                            <section className={`${styles.pp_message}`}>
                                <span className={styles.pp_row}>
                                    <img
                                        className={styles.pp_avatar}
                                        src={avatar}
                                        alt="avatar"
                                    />
                                    <p className={styles.pp_user}>
                                        Stół 3, użytkownik 1
                                    </p>
                                </span>
                                <span className={styles.pp_row}>
                                    <p className={styles.pp_text}>
                                        {`Dołączysz do naszego stolika? 🍔`}
                                    </p>
                                </span>
                            </section>
                        </section>
                    ))}
            </section>
        </section>
    );
};

export default Popup;

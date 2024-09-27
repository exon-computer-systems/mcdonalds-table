import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

import avatar from "../../assets/avatar2.png";

const Popup = ({ switchComponent, messages }) => {
    const [activeMessages, setActiveMessages] = useState([]);

    useEffect(() => {
        setActiveMessages(messages);
    }, [messages]);

    return (
        <section className={styles.pp_cont}>
            <button
                className={styles.pp_button}
                onClick={() => switchComponent("messages")}
            >
                Wyślij wiadomość
            </button>
            <section className={styles.pp_messages}>
                {activeMessages.length > 0 &&
                    activeMessages.map((el, idx) => (
                        <section className={styles.pp_message_cont} key={idx}>
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
                                        Dołączysz do naszego stolika? 🍔
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

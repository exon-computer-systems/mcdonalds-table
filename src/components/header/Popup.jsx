import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";

import avatar from "../../assets/avatar2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Popup = ({
    switchComponent,
    messages,
    setActiveChatBox,
    setMessages,
}) => {
    return (
        <section className={styles.pp_cont}>
            <button
                className={styles.pp_button}
                onClick={() => switchComponent("messages")}
            >
                Wyślij wiadomość
            </button>
            <section className={styles.pp_messages}>
                {messages.length > 0 &&
                    messages.map((el, idx) => (
                        <section
                            className={`${styles.pp_message_cont} ${
                                idx < messages.length - 1 &&
                                styles.pp_border_bottom
                            }`}
                            key={idx}
                        >
                            <section className={styles.pp_message_wrap}>
                                <section className={`${styles.pp_message}`}>
                                    <span className={styles.pp_row}>
                                        <img
                                            className={styles.pp_avatar}
                                            src={avatar}
                                            alt="avatar"
                                        />
                                        <p className={styles.pp_user}>
                                            Stół{" "}
                                            {Math.floor(Math.random() * 8 + 1)},
                                            użytkownik{" "}
                                            {Math.floor(Math.random() * 4 + 1)}
                                        </p>
                                    </span>
                                    <span className={styles.pp_row}>
                                        <p className={styles.pp_text}>{el}</p>
                                    </span>
                                </section>
                                <button
                                    className={styles.pp_message_btn_cont}
                                    onClick={(e) => {
                                        setMessages((prev) =>
                                            prev.filter(
                                                (_, index) => index !== idx
                                            )
                                        );
                                    }}
                                >
                                    <FontAwesomeIcon
                                        className={styles.pp_message_x_btn}
                                        icon={faXmark}
                                    />
                                </button>
                            </section>
                        </section>
                    ))}
            </section>
        </section>
    );
};

export default Popup;

import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";

import avatar from "../../assets/avatar2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useMessage from "../../hooks/useMessage";

const Popup = ({ id, switchComponent }) => {
    const { usersMessage, removeMessage } = useMessage();

    return (
        <section className={styles.pp_cont}>
            <button
                className={styles.pp_button}
                onClick={() => switchComponent("messages")}
            >
                Wyślij wiadomość
            </button>
            <section className={styles.pp_messages}>
                {usersMessage["seat" + id].length > 0 &&
                    usersMessage["seat" + id].map((el, idx) => (
                        <section
                            className={`${styles.pp_message_cont} ${
                                idx < usersMessage["seat" + id].length - 1 &&
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
                                            {el.author}
                                        </p>
                                    </span>
                                    <span className={styles.pp_row}>
                                        <p className={styles.pp_text}>
                                            {el.message}
                                        </p>
                                    </span>
                                </section>
                                <button
                                    className={styles.pp_message_btn_cont}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeMessage(id, el.id);
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

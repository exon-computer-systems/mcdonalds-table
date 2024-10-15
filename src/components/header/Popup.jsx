import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";

import avatar from "../../assets/avatar2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useMessage from "../../hooks/useMessage";
import { faBell, faBellSlash } from "@fortawesome/free-regular-svg-icons";

const Popup = ({ id, switchComponent }) => {
  const { usersMessage, removeMessage, muteUser } = useMessage();

  return (
    <section className={styles.pp_cont}>
      <span className={styles.pp_btns_cont}>
        <button
          className={styles.pp_button}
          onClick={() => switchComponent("messages")}
        >
          Wyślij wiadomość
        </button>
        <button
          className={styles.pp_bell}
          onClick={(e) => {
            e.stopPropagation();
            muteUser(id);
          }}
        >
          {usersMessage["seat" + id].muted ? (
            <FontAwesomeIcon icon={faBellSlash} />
          ) : (
            <FontAwesomeIcon icon={faBell} />
          )}
        </button>
      </span>
      <section className={styles.pp_messages}>
        {usersMessage["seat" + id].messages.length > 0 &&
          usersMessage["seat" + id].messages.map((el, idx) => (
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
                    {/* <img
                      className={styles.pp_avatar}
                      src={avatar}
                      alt="avatar"
                    /> */}

                    <span className={styles.pp_table}>
                      <span
                        className={styles.pp_active}
                        style={{ borderRadius: "0.5rem 0rem 0 0" }}
                      ></span>
                      <span
                        className={styles.pp_blank}
                        style={{ borderRadius: "0rem 0.5rem 0 0" }}
                      ></span>
                      <span
                        className={styles.pp_blank}
                        style={{ borderRadius: "0rem 0rem 0rem 0.5rem" }}
                      ></span>
                      <span
                        className={styles.pp_blank}
                        style={{ borderRadius: "0rem 0rem 0.5rem 0rem" }}
                      ></span>
                    </span>
                    <p className={styles.pp_user}>{el.author}</p>
                  </span>
                  <span className={styles.pp_row}>
                    <p className={styles.pp_text}>{el.message}</p>
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

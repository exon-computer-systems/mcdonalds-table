import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faComments,
  faGamepad,
  faMobileScreenButton,
  faTags,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Navigation = ({ switchComponent, activeComponent }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <motion.section
        initial={{ x: 0, y: 0 }}
        animate={
          isClicked
            ? {
                x: 0,
                y: -140,
              }
            : { x: 0, y: 0 }
        }
        transition={
          isClicked ? { type: "tween" } : { delay: 0.3, type: "tween" }
        }
        className={styles.slide_nav}
      >
        <motion.button
          onClick={() => handleClick()}
          className={styles.icon_down}
          initial={{ x: 0, y: 0 }}
          animate={{ rotate: isClicked ? 180 : 0 }}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </motion.button>
      </motion.section>
      <motion.section
        className={styles.container}
        initial={{ x: 0, y: 0, height: 10, display: "none" }}
        animate={
          isClicked
            ? {
                x: 0,
                y: 0,
                height: 150,
                display: "flex",
              }
            : { x: 0, y: 0 }
        }
        transition={isClicked === false && { delay: 0.3 }}
      >
        <section className={styles.wrapper}>
          <motion.section
            animate={isClicked ? { opacity: 1 } : { opacity: 0 }}
            className={styles.btns_wrapper}
          >
            {/* <button
              className={`${styles.btn} ${
                activeComponent === "menu" && styles.active
              }`}
              onClick={() => {
                switchComponent("menu");
                handleClick();
              }}
            >
              <FontAwesomeIcon className={styles.btn_icon} icon={faUtensils} />
              <span className={styles.btn_text}>menu</span>
            </button> */}
            <button
              className={`${styles.btn} ${
                activeComponent === "application" && styles.active
              }`}
              onClick={() => {
                switchComponent("application");
                handleClick();
              }}
            >
              <FontAwesomeIcon
                className={styles.btn_icon}
                icon={faMobileScreenButton}
              />
              <span className={styles.btn_text}>aplikacja</span>
            </button>

            <button
              className={`${styles.btn} ${
                activeComponent === "promotions" && styles.active
              }`}
              onClick={() => {
                switchComponent("promotions");
                handleClick();
              }}
            >
              <FontAwesomeIcon className={styles.btn_icon} icon={faTags} />
              <span className={styles.btn_text}>Promocje</span>
            </button>
            <button
              className={`${styles.btn} ${
                activeComponent === "games" && styles.active
              }`}
              onClick={() => {
                switchComponent("games");
                handleClick();
              }}
            >
              <FontAwesomeIcon className={styles.btn_icon} icon={faGamepad} />
              <span className={styles.btn_text}>Gry</span>
            </button>
          </motion.section>
        </section>
      </motion.section>
    </>
  );
};

export default Navigation;

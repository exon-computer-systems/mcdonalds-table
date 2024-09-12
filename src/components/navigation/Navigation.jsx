import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Navigation = ({ switchComponent }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("clicked");
  };

  return (
    <>
      <motion.section
        initial={{ x: 0, y: 0 }}
        animate={
          isClicked
            ? {
                x: 0,
                y: -240,
              }
            : { x: 0, y: 0 }
        }
        transition={{ type: "tween" }}
        className={styles.slide_nav}
      >
        <motion.button
          onClick={handleClick}
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
                height: 250,
                display: "flex",
              }
            : { x: 0, y: 0 }
        }
      >
        <section className={styles.wrapper}>
          <motion.section
            animate={isClicked ? { opacity: 1 } : { opacity: 0 }}
            className={styles.btns_wrapper}
          >
            <button onClick={() => switchComponent("shoppingCart")}>
              Aplikacja
            </button>
            <button>Kelner</button>
            <button onClick={() => switchComponent("promotions")}>
              Promocje
            </button>
            <button onClick={() => switchComponent("menu")}>Menu</button>
          </motion.section>
        </section>
      </motion.section>
    </>
  );
};

export default Navigation;

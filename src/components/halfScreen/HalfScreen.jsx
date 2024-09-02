import React from "react";
import styles from "./HalfScreen.module.css";
import Promotions from "../Promotions/Promotions";
const HalfScreen = () => {
  return (
    <section className={styles.half}>
      <Promotions></Promotions>
    </section>
  );
};

export default HalfScreen;

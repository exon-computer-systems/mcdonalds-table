import React from "react";
import styles from "./QuarterScreen.module.css";
import Promotions from "../Promotions/Promotions";

const QuarterScreen = () => {
  return (
    <section className={styles.quarter}>
      <Promotions />
    </section>
  );
};

export default QuarterScreen;

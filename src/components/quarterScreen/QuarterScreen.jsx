import React from "react";
import styles from "./QuarterScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";

const QuarterScreen = () => {
    return (
        <section className={styles.quarter}>
            <Menu />
            {/* <Promotions /> */}
        </section>
    );
};

export default QuarterScreen;

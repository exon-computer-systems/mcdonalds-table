import React from "react";
import styles from "./HalfScreen.module.css";
import Menu from "../menu/Menu";
import Promotions from "../promotions/Promotions";
const HalfScreen = () => {
    return (
        <section className={styles.half}>
            {/* <Menu /> */}
            <Promotions />
        </section>
    );
};

export default HalfScreen;

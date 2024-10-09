import React from "react";
import styles from "./Inactive.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

const Inactive = ({ reset, setActiveComponent }) => {
    return (
        <section
            className={styles.container}
            onClick={() => {
                setActiveComponent("menu");
                reset();
            }}
        >
            <section className={styles.info}>
                <h3 className={styles.text}>
                    Dotknij
                    <br />
                    ekranu
                </h3>
                <FontAwesomeIcon icon={faHandPointer} className={styles.icon} />
                <h3 className={styles.text}>
                    aby <br /> aktywować
                </h3>
            </section>
        </section>
    );
};

export default Inactive;

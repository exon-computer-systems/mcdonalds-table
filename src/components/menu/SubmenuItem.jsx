import React from "react";
import styles from "./Menu.module.css";

import {
    faMagnifyingGlassPlus,
    faMinus,
    faPlus,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import bigmac from "../../assets/burgers/bigmac.png";

const SubmenuItem = ({ order, setOrder, itemName, itemPrice, itemImage }) => {
    return (
        <section className={styles.sb_item}>
            <h3 className={styles.sb_item_title}>
                <span className={styles.sb_item_title_p1}>{itemName}</span>
                <span className={styles.sb_item_title_p2}>{itemPrice}zł</span>
            </h3>
            <img
                src={itemImage}
                alt="submenu item image"
                className={styles.sb_item_cover}
            />
            <section className={styles.sb_item_nav}>
                <section className={styles.sb_item_count}>
                    <button
                        className={`${styles.sb_item_btn} ${styles.sb_item_btn_decrease}`}
                    >
                        <FontAwesomeIcon
                            icon={faMinus}
                            className={styles.sb_item_decrease}
                        />
                    </button>
                    <span className={styles.sb_item_counter}>
                        {order.bigmac}
                    </span>
                    <button
                        className={`${styles.sb_item_btn} ${styles.sb_item_btn_increase}`}
                        name="bigmac"
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            className={styles.sb_item_increase}
                        />
                    </button>
                </section>
                <button className={styles.sb_item_btn_showup}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
            </section>
        </section>
    );
};

export default SubmenuItem;

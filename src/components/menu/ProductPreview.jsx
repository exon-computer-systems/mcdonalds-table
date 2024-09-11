import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCartPlus,
    faMinus,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

import bkg from "../../assets/bg-light.jpg";
import cappucino from "../../assets/mccafe/cappuccino.png";
import { useState } from "react";

const ProductPreview = ({ setShowPreview }) => {
    const [itemOrder, setItemOrder] = useState(1);

    const handleIncrease = () => {
        setItemOrder((prev) => (prev < 10 ? prev + 1 : prev));
    };

    const handleDecrease = () => {
        setItemOrder((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <section className={styles.product_preview_cont}>
            <section className={styles.product_preview}>
                <h2 className={styles.pp_title}>
                    <button
                        className={styles.pp_title_back}
                        onClick={() => setShowPreview(false)}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <span className={styles.pp_title_title}>
                        Cappucino 0,2l
                    </span>
                </h2>
                <section className={styles.pp_content}>
                    <section className={styles.pp_info}>
                        <p className={styles.pp_info_price}>6.60zł</p>
                        <section className={styles.pp_info_content}>
                            <section className={styles.pp_info_size_cont}>
                                <section className={styles.pp_info_size}>
                                    <span
                                        className={styles.pp_info_size_btn_cont}
                                    >
                                        <button
                                            className={`${styles.pp_info_size_btn} ${styles.pp_active}`}
                                        >
                                            S
                                        </button>
                                        <p
                                            className={
                                                styles.pp_info_size_price
                                            }
                                        ></p>
                                    </span>
                                    <span
                                        className={styles.pp_info_size_btn_cont}
                                    >
                                        <button
                                            className={`${styles.pp_info_size_btn} ${styles.pp_inactive}`}
                                        >
                                            M
                                        </button>
                                        <p
                                            className={
                                                styles.pp_info_size_price
                                            }
                                        >
                                            +5.00zł
                                        </p>
                                    </span>
                                    <span
                                        className={styles.pp_info_size_btn_cont}
                                    >
                                        <button
                                            className={`${styles.pp_info_size_btn} ${styles.pp_inactive}`}
                                        >
                                            L
                                        </button>
                                        <p
                                            className={
                                                styles.pp_info_size_price
                                            }
                                        >
                                            +6.00zł
                                        </p>
                                    </span>
                                </section>
                            </section>

                            <section className={styles.pp_customize}>
                                <button className={styles.pp_customize_btn}>
                                    Personalizuj
                                </button>
                            </section>
                            <section className={styles.pp_count_cont}>
                                <section className={styles.pp_count}>
                                    <button
                                        className={`${styles.pp_count_btn}`}
                                        onClick={handleDecrease}
                                    >
                                        <FontAwesomeIcon
                                            icon={faMinus}
                                            className={styles.pp_count_decrease}
                                        />
                                    </button>
                                    <span className={styles.pp_count_counter}>
                                        {itemOrder}
                                    </span>
                                    <button
                                        className={`${styles.pp_count_btn}`}
                                        onClick={handleIncrease}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className={styles.pp_count_increase}
                                        />
                                    </button>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className={styles.pp_image_cont}>
                        <section
                            className={styles.pp_image_bkg}
                            style={{ backgroundImage: `url(${bkg})` }}
                        >
                            <img
                                src={cappucino}
                                className={styles.pp_image}
                                alt="product preview"
                            />
                        </section>
                        <section className={styles.pp_image_btn_cont}>
                            <button
                                className={styles.pp_image_btn_back}
                                onClick={() => setShowPreview(false)}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} /> Wróć
                            </button>
                            <button className={styles.pp_image_btn_sub}>
                                Dodaj do zamówienia{" "}
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default ProductPreview;

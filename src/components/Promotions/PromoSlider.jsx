import styles from "./Promotions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import { useRef, useState } from "react";

const PromoSlider = () => {
    const ref = useRef(null);

    const handleScroll = (offset) => {
        ref.current.scrollLeft += offset;
    };

    return (
        <section className={styles.scroll_container}>
            <h2>Burgery</h2>
            <FontAwesomeIcon
                className={`${styles.icon_left} ${styles.icons}`}
                icon={faAngleLeft}
                onClick={() => handleScroll(-200)}
            />
            <FontAwesomeIcon
                className={`${styles.icon_right} ${styles.icons}`}
                icon={faAngleRight}
                onClick={() => handleScroll(200)}
            />

            <section className={styles.scroll_wrapper} ref={ref}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <img
                        src={img1}
                        alt="i"
                        key={index}
                        className={styles.scroll_img}
                    />
                ))}
            </section>
        </section>
    );
};

export default PromoSlider;

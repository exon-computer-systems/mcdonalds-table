import styles from "./Promotions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useRef } from "react";

const PromoSlider2 = ({ promoSlider2 }) => {
  const ref = useRef(null);

  const handleScroll = offset => {
    ref.current.scrollLeft += offset;
  };

  return (
    <section className={styles.scroll_container2}>
      <h2>okazYeah</h2>
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
        {promoSlider2.map((el, index) => (
          <img
            src={el.itemImg}
            alt="i"
            key={index}
            className={styles.scroll_img2}
          />
        ))}
      </section>
    </section>
  );
};

export default PromoSlider2;

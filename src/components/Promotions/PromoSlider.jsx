import styles from "./Promotions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useRef, useEffect } from "react";

const PromoSlider = ({ promoSlider }) => {
  const ref = useRef(null);
  const intervalRef = useRef(null);
  const handleScroll = offset => {
    ref.current.scrollLeft += offset;
  };

  const newSlider = [...promoSlider, ...promoSlider, ...promoSlider];

  const startScrolling = () => {
    intervalRef.current = setInterval(() => {
      if (ref.current) {
        ref.current.scrollLeft += 200;

        if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
          ref.current.scrollLeft = 0;
        }
      }
    }, 2000);
  };

  const stopScrolling = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);

  return (
    <section className={styles.scroll_container}>
      <h2>Oferty Specjalne</h2>
      {/* <FontAwesomeIcon
        className={`${styles.icon_left} ${styles.icons}`}
        icon={faAngleLeft}
        onClick={() => handleScroll(-200)}
      />
      <FontAwesomeIcon
        className={`${styles.icon_right} ${styles.icons}`}
        icon={faAngleRight}
        onClick={() => handleScroll(200)}
      /> */}

      <section
        className={styles.scroll_wrapper}
        ref={ref}
        onMouseEnter={stopScrolling}
        onMouseLeave={startScrolling}
      >
        {newSlider.map((el, index) => (
          <img
            src={el.itemImg}
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

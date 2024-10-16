import styles from "./Promotions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PromoSlider2 = ({ promoSlider2, open, close }) => {
  const ref = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [activeCoupon, setActiveCoupon] = useState(false);
  const [counter, setCounter] = useState(300);
  const [timerActive, setTimerActive] = useState(false);

  const handleScroll = offset => {
    ref.current.scrollLeft += offset;
  };

  useEffect(() => {
    let timer;
    if (timerActive && counter > 0) {
      timer = setInterval(() => setCounter(prev => prev - 1), 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter, timerActive]);

  const handleActivateCoupon = () => {
    setActiveCoupon(true);
    setCounter(300);
    setTimerActive(true);
    setTimeout(() => {
      setTimerActive(false);
      setActiveCoupon(false);
    }, 300000);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const selectedItem = promoSlider2.find(item => item.itemName === selectedId);

  return (
    <>
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
          {promoSlider2.map(el => (
            <motion.section
              layoutId={el.itemName}
              onClick={() => {
                setSelectedId(el.itemName);
                open();
              }}
              className={styles.scroll_img2_wrapper}
              key={el.itemName}
            >
              <motion.img
                src={el.itemImg}
                alt={el.itemName}
                className={styles.scroll_img2}
              />
            </motion.section>
          ))}
        </section>

        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.section
              layoutId={selectedId}
              className={styles.expanded_section}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={selectedItem.itemImg}
                alt={selectedItem.itemName}
                className={styles.expanded_img}
              />
              <motion.h2>{selectedItem.itemName}</motion.h2>
              <motion.button
                onClick={() => {
                  setSelectedId(null);
                  close();
                }}
                className={styles.close_btn}
              >
                <FontAwesomeIcon icon={faX} className={styles.exit_icon} />
              </motion.button>
              {!activeCoupon ? (
                <motion.section className={styles.activate}>
                  <motion.button
                    className={styles.active_btn}
                    onClick={handleActivateCoupon}
                  >
                    Aktywuj kupon
                  </motion.button>
                </motion.section>
              ) : (
                <motion.section className={styles.active_coupon}>
                  <h1>Kupon aktywowany</h1>
                  <span>{formatTime(counter)}</span>
                </motion.section>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default PromoSlider2;

import styles from "./Promotions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
const PromoSlider2 = ({ promoSlider2 }) => {
  const ref = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [activeCoupon, setActiveCoupon] = useState(false);

  const handleScroll = offset => {
    ref.current.scrollLeft += offset;
  };
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  console.log(counter);
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
              onClick={() => setSelectedId(el.itemName)}
              className={styles.scroll_img2_wrapper}
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
                onClick={() => setSelectedId(null)}
                className={styles.close_btn}
              >
                <FontAwesomeIcon icon={faX} className={styles.exit_icon} />
              </motion.button>
              {!activeCoupon ? (
                <motion.button>Aktywuj kupon</motion.button>
              ) : (
                <motion.section>
                  <h1>Kupon aktywowany</h1>
                  <span></span>
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

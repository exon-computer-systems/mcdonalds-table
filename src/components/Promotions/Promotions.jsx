import styles from "./Promotions.module.css";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Promotions = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Promocje</h1>

      <section className={styles.scroll_container}>
        <h2>Burgery</h2>
        <section className={styles.scroll_wrapper}>
          <FontAwesomeIcon icon={faAngleLeft} />
          {Array.from({ length: 10 }).map((_, index) => (
            <img src={img1} alt="i" key={index} />
          ))}
          <FontAwesomeIcon icon={faAngleRight} />
        </section>
      </section>
      <section className={styles.scroll_container}>
        <h2>Zestawy</h2>
        <section className={styles.scroll_wrapper}>
          {Array.from({ length: 10 }).map((_, index) => (
            <img src={img2} alt="i" key={index} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Promotions;

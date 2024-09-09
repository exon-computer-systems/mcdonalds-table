import styles from "./ShoppingCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import mc_logo from "../../img/mcd_logo.png";

const ShoppingCart = () => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        {/* <img src={mc_logo} alt="" /> */}
        <h2>Twoje zamówienie</h2>

        <section className={styles.items}>
          <section className={styles.item_desc}>
            <img src="" alt="" />
            <p>2 x BigMac + Frytki</p>
          </section>
          <section className={styles.item_cta}>
            <button className={styles.delete_btn}>
              <FontAwesomeIcon className={styles.trash_icon} icon={faTrash} />
            </button>
            <input type="number" value={1} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ShoppingCart;

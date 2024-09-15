import styles from "./ShoppingCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>Twoje zamówienie</h1>
        </section>
    );
};

export default ShoppingCart;

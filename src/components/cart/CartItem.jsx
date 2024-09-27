import styles from "./Cart.module.css";

import useImage from "../../hooks/useImage";

import burger from "../../assets/burgers/bigmac.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const CartItem = ({
    item,
    category,
    removeItem,
    setShowItemPreview,
    switchComponent,
    modifyOrder,
}) => {
    return (
        <section className={`${styles.cart_item} `}>
            <section className={styles.ci_info}>
                <img
                    className={styles.ci_info_img}
                    src={useImage(item.itemImage)}
                    alt="ordered item preview"
                />
                <h3 className={styles.ci_info_title}>{item.itemName}</h3>
            </section>
            <section className={styles.ci_options}>
                <button
                    className={styles.ci_options_btn}
                    onClick={() => {
                        setShowItemPreview(item);
                        switchComponent("menu");
                    }}
                >
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button
                    className={styles.ci_options_btn}
                    onClick={() => removeItem(category, item.itemId)}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                {/* <span className={styles.ci_options_quantity}>
                    {item.quantity}
                </span> */}

                <section className={styles.ci_count}>
                    <button
                        className={`${styles.ci_count_btn}`}
                        onClick={() => modifyOrder(item, category, "decrease")}
                    >
                        <FontAwesomeIcon
                            icon={faMinus}
                            className={styles.ci_count_decrease}
                        />
                    </button>
                    <span className={styles.ci_count_counter}>
                        {item.quantity}
                    </span>
                    <button
                        className={`${styles.ci_count_btn}`}
                        onClick={() => modifyOrder(item, category, "increase")}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            className={styles.ci_count_increase}
                        />
                    </button>
                </section>

                <span className={styles.ci_options_price}>
                    {parseFloat(item.itemPrice).toFixed(2)} zł
                </span>
            </section>
        </section>
    );
};

export default CartItem;

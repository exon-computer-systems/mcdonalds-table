import { useEffect, useState } from "react";
import styles from "./Menu.module.css";

import useImage from "../../hooks/useImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCartPlus,
    faMinus,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

import bkg from "../../assets/bg-light.jpg";

const ProductPreview = ({
    showItemPreview,
    setShowItemPreview,
    setUserOrder,
    category,
}) => {
    const [item, setItem] = useState("");
    const [itemOrder, setItemOrder] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");

    const handleIncrease = () => {
        setItemOrder((prev) => (prev < 10 ? prev + 1 : prev));
    };

    const handleDecrease = () => {
        setItemOrder((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const addToCart = (item, category) => {
        setUserOrder((prev) => {
            const newItem = { ...item, quantity: itemOrder };

            return {
                ...prev,
                [category]: prev[category]
                    ? [...prev[category], newItem]
                    : [newItem],
            };
        });
        setShowItemPreview(null);
    };

    useEffect(() => {
        showItemPreview.options
            ? setSelectedSize(showItemPreview.options[0])
            : null;

        setItem(showItemPreview);
    }, [showItemPreview]);

    return (
        <section className={styles.product_preview_cont}>
            <section className={styles.product_preview}>
                <section className={styles.pp_heading_cont}>
                    <button
                        className={styles.pp_heading_back}
                        onClick={() => setShowItemPreview(null)}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <section className={styles.pp_heading}>
                        <h2
                            className={styles.pp_heading_title}
                            onClick={() => console.log(item)}
                        >
                            {`${item.itemName} ${
                                selectedSize.capacity
                                    ? selectedSize.capacity + "l"
                                    : ""
                            }`}
                        </h2>
                        <p className={styles.pp_heading_price}>
                            {selectedSize
                                ? parseFloat(selectedSize.itemPrice).toFixed(2)
                                : parseFloat(item.itemPrice).toFixed(2)}
                            {" zł"}
                        </p>
                    </section>
                </section>
                <section className={styles.pp_content}>
                    <section className={styles.pp_info}>
                        <section className={styles.pp_info_content}>
                            <section className={styles.pp_info_size_cont}>
                                <section className={styles.pp_info_size}>
                                    {item.options?.map((el) => {
                                        const priceDiff =
                                            el.itemPrice -
                                            selectedSize.itemPrice;

                                        return (
                                            <span
                                                key={el.sizeName}
                                                className={
                                                    styles.pp_info_size_btn_cont
                                                }
                                            >
                                                <button
                                                    className={`${
                                                        styles.pp_info_size_btn
                                                    } ${
                                                        selectedSize.size ===
                                                        el.size
                                                            ? styles.pp_active
                                                            : styles.pp_inactive
                                                    }`}
                                                    onClick={() =>
                                                        setSelectedSize(el)
                                                    }
                                                >
                                                    {el.size}
                                                </button>
                                                <p
                                                    className={
                                                        styles.pp_info_size_price
                                                    }
                                                >
                                                    {priceDiff > 0 && "+"}
                                                    {priceDiff !== 0 &&
                                                        `${parseFloat(
                                                            priceDiff
                                                        ).toFixed(2)} zł`}
                                                </p>
                                            </span>
                                        );
                                    })}
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
                                src={useImage(item.itemImage)}
                                className={styles.pp_image}
                                alt="product preview"
                            />
                        </section>
                    </section>
                </section>
                <section className={styles.pp_image_btn_cont}>
                    <button
                        className={styles.pp_image_btn_sub}
                        onClick={() => addToCart(item, category)}
                    >
                        Dodaj do zamówienia{" "}
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                    <button
                        className={styles.pp_image_btn_back}
                        onClick={() => setShowItemPreview(null)}
                        // onClick={() => setUserOrder({})}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} /> {" Wróć"}
                    </button>
                </section>
            </section>
        </section>
    );
};

export default ProductPreview;

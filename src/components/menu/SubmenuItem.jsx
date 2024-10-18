import { useState } from "react";
import styles from "./Menu.module.css";

import useImage from "../../hooks/useImage";

import {
  faMagnifyingGlassPlus,
  faMinus,
  faPlus,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductPreview from "./ProductPreview";

const SubmenuItem = ({
  userOrder,
  category,
  item,
  addToOrder,
  setShowItemPreview,
  borderRight,
  borderBottom,
}) => {
  const orderCategory = userOrder[category] || [];
  const orderItem = orderCategory.find(
    (orderItem) => orderItem.itemName === item.itemName
  );
  const quantity = orderItem ? orderItem.quantity : 0;

  return (
    <>
      <section
        className={`${styles.sb_item} ${
          borderBottom && styles.sb_item_border_bottom
        } ${borderRight && styles.sb_item_border_right}`}
      >
        <section className={styles.sb_item_heading_cont}>
          <span className={styles.sb_item_heading_wrapper}>
            <h3 className={styles.sb_item_heading}>
              {item.itemName}
              {item.options && item.capacity && ` ${item.capacity}l`}
            </h3>
            <p className={styles.sb_item_price}>
              {parseFloat(item.itemPrice).toFixed(2) + " zł"}
            </p>
          </span>

          {item.options && item.capacity && (
            <span className={styles.sb_item_default_size}>S</span>
          )}
        </section>
        <img
          src={useImage(item.itemImage)}
          alt="submenu item image"
          className={styles.sb_item_cover}
        />
        <section className={styles.sb_item_nav}>
          <section className={styles.sb_item_count}>
            {/* {!item.options && ( */}
            <>
              <button
                className={`${styles.sb_item_btn} ${styles.sb_item_btn_decrease}`}
                onClick={() => addToOrder(item, category, "minus")}
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  className={styles.sb_item_decrease}
                />
              </button>
              <span className={styles.sb_item_counter}>{quantity}</span>
              <button
                className={`${styles.sb_item_btn} ${styles.sb_item_btn_increase}`}
                onClick={() => addToOrder(item, category, "plus")}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={styles.sb_item_increase}
                />
              </button>
            </>
            {/* )} */}
          </section>
          <button
            className={styles.sb_item_btn_showup}
            onClick={() => setShowItemPreview(item)}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </section>
      </section>
    </>
  );
};

export default SubmenuItem;

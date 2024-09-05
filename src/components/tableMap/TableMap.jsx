import { useState } from "react";
import styles from "./TableMap.module.css";
const TableMap = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section className={styles.table_map_container}>
      <section className={styles.table}>
        <span className={styles.place}>1</span>
        <span className={styles.place}>2</span>
        <span className={styles.place}>3</span>
        <span className={styles.place}>4</span>
      </section>
      <section className={styles.table}>
        <span className={styles.place}>1</span>
        <span className={styles.place}>2</span>
        <span className={styles.place}>3</span>
        <span className={styles.place}>4</span>
      </section>
      <section className={styles.table}>
        <span className={styles.place}>1</span>
        <span className={styles.place}>2</span>
        <span className={styles.place}>3</span>
        <span className={styles.place}>4</span>
      </section>
      <section className={styles.table}>
        <span className={styles.place}>1</span>
        <span className={styles.place}>2</span>
        <span className={styles.place}>3</span>
        <span className={styles.place}>4</span>
      </section>
      <section className={styles.table}>
        <span className={styles.place}>1</span>
        <span className={styles.place}>2</span>
        <span className={styles.place}>3</span>
        <span className={styles.place}>4</span>
      </section>
      <section className={styles.table}>
        <span className={styles.place}>1</span>
        <span className={styles.place}>2</span>
        <span className={styles.place}>3</span>
        <span className={styles.place}>4</span>
      </section>
    </section>
  );
};

export default TableMap;

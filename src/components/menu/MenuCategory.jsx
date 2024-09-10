import styles from "./Menu.module.css";

const MenuCategory = ({ active, onClick, selectedCategory, title, bkg }) => {
    return (
        <section
            // className={`${styles.mc_item} ${active ? styles.active : ""}`}
            className={`${
                selectedCategory ? styles.mc_item_mini : styles.mc_item
            } ${
                active
                    ? selectedCategory
                        ? styles.active_mini
                        : styles.active
                    : ""
            }`}
            onClick={onClick}
        >
            <img
                className={styles.mc_item_cover}
                src={bkg}
                alt="burger background"
            />
            <section
                className={
                    selectedCategory
                        ? styles.mc_item_overflow_mini
                        : styles.mc_item_overflow
                }
            >
                <h2
                    className={
                        selectedCategory
                            ? styles.mc_item_title_mini
                            : styles.mc_item_title
                    }
                >
                    {title}
                </h2>
            </section>
        </section>
    );
};

export default MenuCategory;

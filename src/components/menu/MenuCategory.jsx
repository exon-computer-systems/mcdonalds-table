import styles from "./Menu.module.css";

const MenuCategory = ({ active, onClick, title, bkg }) => {
    return (
        <section
            className={`${styles.mc_item} ${active ? styles.active : ""}`}
            onClick={onClick}
        >
            <img
                className={styles.mc_item_cover}
                src={bkg}
                alt="burger background"
            />
            <section className={styles.mc_item_overflow}>
                <h2 className={styles.mc_item_title}>{title}</h2>
            </section>
        </section>
    );
};

export default MenuCategory;

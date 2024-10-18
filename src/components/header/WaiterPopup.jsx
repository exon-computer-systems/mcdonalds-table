import styles from "./Header.module.css";

const WaiterPopup = ({isSingle, callWaiter}) => {
    return <section className={styles.waiter_pp_cont}>
        <section className={styles.waiter_pp_btns_cont}>
            <button onClick={callWaiter}>
                Rachunek
            </button>
            <button onClick={callWaiter}>
                Uwagi
            </button>
        </section>
    </section>
}
export default WaiterPopup;
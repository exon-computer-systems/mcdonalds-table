import styles from "./Confirmation.module.css";

const Confirmation = () => {
  const random = Math.floor(Math.random() * (100 - 1) + 1);
  return (
    <section className={styles.confirmation_cont}>
      <h2>Zamówienie zostało złozone</h2>
      <span>nr zamowienia #{random}</span>
    </section>
  );
};

export default Confirmation;

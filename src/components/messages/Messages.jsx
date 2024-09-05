import TableMap from "../tableMap/TableMap";
import styles from "./Messages.module.css";
const Messages = () => {
  return (
    <section className={styles.container}>
      <h1>Wybierz i wyślij</h1>
      <TableMap />
      <section className={styles.messages_wrapper}>
        <section className={styles.message}>
          <button>Smacznego!</button>
          <button>Dołączysz do naszego stolika?</button>
          <button>Miłego dnia!</button>
        </section>
        <section className={styles.emojis}>
          <button>
            <span className={styles.emoji_icon}>👋</span>
          </button>
          <button>
            <span className={styles.emoji_icon}>🫶</span>
          </button>
          <button>
            <span className={styles.emoji_icon}>😎</span>
          </button>
          <button>
            <span className={styles.emoji_icon}>😮</span>
          </button>
        </section>
      </section>
    </section>
  );
};

export default Messages;

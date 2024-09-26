import TableMap from "./tableMap/TableMap";
import styles from "./Messages.module.css";
const Messages = () => {
  return (
    <section className={styles.container}>
      <TableMap />

      <section className={styles.messages_wrapper}>
        <section className={styles.messages_container}>
          <section className={styles.message}>
            <section className={styles.messages_slider}>
              <button>Smacznego!</button>
              <button>Dołączysz do nas?</button>
              <button>Miłego dnia!</button>
            </section>
          </section>
          <section className={styles.emojis}>
            <section className={styles.emojis_slider}>
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
        <section className={styles.send_msg_btn}>
          <button>Wyślij</button>
        </section>
      </section>
    </section>
  );
};

export default Messages;

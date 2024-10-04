import TableMap from "./tableMap/TableMap";
import styles from "./Messages.module.css";
import { messages } from "../../data/messages";
const Messages = () => {
  return (
    <section className={styles.container}>
      <TableMap />

      <section className={styles.messages_wrapper}>
        <section className={styles.messages_container}>
          <section className={styles.message}>
            <section className={styles.messages_slider}>
              {messages.text.map(el => (
                <button key={el}>{el}</button>
              ))}
            </section>
          </section>
          <section className={styles.emojis}>
            <section className={styles.emojis_slider}>
              {messages.emojis.map(el => (
                <button key={el}>
                  <span className={styles.emoji_icon}>{el}</span>
                </button>
              ))}
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

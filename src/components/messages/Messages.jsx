import { useState } from "react";
import styles from "./Messages.module.css";
import { messages } from "../../data/messages";
import useMessage from "../../hooks/useMessage";
import TableMap from "./tableMap/TableMap";
import { delay, motion } from "framer-motion";
import AlertMsg from "../alertMsg/AlertMsg";

const Messages = ({ id }) => {
  const { addMessage } = useMessage();
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [failAlert, setFailAlert] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  console.log(selectedPlaces);

  const handlePlaceClick = (tableId, seatNum) => {
    const placeId = `${tableId}-${seatNum}`;
    if (selectedPlaces.includes(placeId)) {
      setSelectedPlaces(selectedPlaces.filter(place => place !== placeId));
    } else {
      setSelectedPlaces([...selectedPlaces, placeId]);
    }
  };

  const handleTextMessageClick = message => {
    setSelectedMessage(message);
  };

  const handleEmojiClick = emoji => {
    setSelectedEmoji(emoji);
  };

  const handleSendMessage = () => {
    if (selectedPlaces.length > 0 && selectedMessage) {
      selectedPlaces.forEach(placeId => {
        const [tableNum, seatNum] = placeId.split("-");
        setSelectedSeat(seatNum);
        const author = `Stół ${1}, Miejsce ${id}`;
        const randomText = selectedMessage;
        const randomEmoji = selectedEmoji;
        const fullMessage = `${randomText} ${randomEmoji}`;

        console.log(author, fullMessage, placeId);

        addMessage(selectedSeat, {
          author: author,
          message: fullMessage,
          table: 1,
          seat: id,
        });
        setSelectedPlaces([]);
        setSelectedMessage("");
        setSelectedEmoji("");
        setAlert({ type: "success", message: "Wiadomość została wysłana" });
      });
    } else {
      setFailAlert(true);
      setAlert({
        type: "error",
        message: "Select a place and enter a message!",
      });
    }
    setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 4000);
  };

  return (
    <section className={styles.container}>
      {alert.message && (
        <AlertMsg alertType={alert.type}>{alert.message}</AlertMsg>
      )}

      <TableMap
        selectedPlaces={selectedPlaces}
        handlePlaceClick={handlePlaceClick}
      />

      <section className={styles.messages_wrapper}>
        <section className={styles.messages_container}>
          {/* Message selection */}
          <section className={styles.message}>
            <section className={styles.messages_slider}>
              {messages.text.map(el => (
                <button
                  key={el}
                  className={
                    selectedMessage === el ? styles.selected : styles.msg_btn
                  }
                  onClick={() => handleTextMessageClick(el)}
                >
                  {el}
                </button>
              ))}
            </section>
          </section>

          {/* Emoji selection */}
          <section className={styles.emojis}>
            <section className={styles.emojis_slider}>
              {messages.emojis.map(el => (
                <button
                  key={el}
                  className={selectedEmoji === el ? styles.selected : ""}
                  onClick={() => handleEmojiClick(el)}
                >
                  <span className={styles.emoji_icon}>{el}</span>
                </button>
              ))}
            </section>
          </section>
        </section>

        {/* Send message button */}
        <section className={styles.send_msg_btn}>
          <button onClick={handleSendMessage}>Wyślij</button>
        </section>
      </section>
    </section>
  );
};

export default Messages;

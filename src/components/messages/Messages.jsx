import { useState } from "react";
import styles from "./Messages.module.css";
import { messages } from "../../data/messages";
import useMessage from "../../hooks/useMessage";
import TableMap from "./tableMap/TableMap";

const Messages = () => {
  const { addMessage } = useMessage();
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");

  // Function to handle table/place selection
  const handlePlaceClick = placeId => {
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
        const randomTable = Math.floor(Math.random() * 8 + 1);
        const randomUser = Math.floor(Math.random() * 4 + 1);

        const author = `Stół ${randomTable}, użytkownik ${randomUser}`;
        const randomText = selectedMessage;
        const randomEmoji = selectedEmoji;
        const fullMessage = `${randomText} ${randomEmoji}`;

        console.log(author, fullMessage, placeId);

        addMessage([placeId], {
          author: author,
          message: fullMessage,
        });
      });

      setSelectedPlaces([]);
      setSelectedMessage("");
      setSelectedEmoji("");
    } else {
      alert("Please select at least one seat and a message to send.");
    }
  };

  return (
    <section className={styles.container}>
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

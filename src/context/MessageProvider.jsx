import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MessageContext = createContext({});

export const MessageProvider = ({ children }) => {
  const [usersMessage, setUsersMessage] = useState({
    seat1: { messages: [], muted: false },
    seat2: { messages: [], muted: false },
    seat3: { messages: [], muted: false },
    seat4: { messages: [], muted: false },
  });

  const addMessage = (ids, message) => {
    setUsersMessage(prev => {
      // Create copy of messages state
      const newMessages = { ...prev };
      console.log("ids", ids);
      ids.forEach(el => {
        const seatKey = "seat" + el;

        if (!newMessages[seatKey].muted) {
          // Create a new array for messages to ensure immutability
          const updatedMessages = [
            { id: uuidv4(), ...message },
            ...prev[seatKey].messages,
          ];

          newMessages[seatKey] = {
            ...prev[seatKey],
            // Assign the new array
            messages: updatedMessages,
          };
        }
      });

      // return new array to state
      return newMessages;
    });
  };

  const removeMessage = (seatId, messageId) => {
    setUsersMessage(prev => {
      const seatKey = "seat" + seatId;
      const newMessages = { ...prev };

      // Filtrujemy wiadomości bezpośrednio na kopii stanu
      newMessages[seatKey].messages = prev[seatKey].messages.filter(
        msg => msg.id !== messageId
      );

      return newMessages; // Zwracamy nową kopię obiektu stanu
    });
  };

  const muteUser = seatId => {
    setUsersMessage(prev => {
      const seatKey = "seat" + seatId;

      const newMessages = { ...prev };

      newMessages[seatKey].muted = !prev[seatKey].muted;

      return newMessages;
    });
  };

  return (
    <MessageContext.Provider
      value={{ usersMessage, addMessage, removeMessage, muteUser }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;

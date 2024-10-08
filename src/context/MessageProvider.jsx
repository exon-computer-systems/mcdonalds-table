import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MessageContext = createContext({});

export const MessageProvider = ({ children }) => {
    const [usersMessage, setUsersMessage] = useState({
        seat1: [
            {
                id: 1,
                author: "Patrys",
                message: "lol",
            },
        ],
        seat2: [],
        seat3: [],
        seat4: [],
    });

    // Funkcja dodawania wiadomości
    const addMessage = (ids, message) => {
        setUsersMessage((prev) => {
            const newMessages = { ...prev }; // Tworzymy nową kopię stanu

            ids.forEach((el) => {
                const seatKey = "seat" + el;

                // Tworzymy nową tablicę dla każdej zmienionej "seat"
                newMessages[seatKey] = [
                    { id: uuidv4(), ...message },
                    ...(prev[seatKey] || []),
                ];
            });

            return newMessages; // Zwracamy nową kopię obiektu stanu
        });
    };

    const removeMessage = (seatId, messageId) => {
        setUsersMessage((prev) => {
            const seatKey = "seat" + seatId;
            const newMessages = { ...prev };

            // Filtrujemy wiadomości bezpośrednio na kopii stanu
            newMessages[seatKey] = prev[seatKey].filter(
                (msg) => msg.id !== messageId
            );

            return newMessages; // Zwracamy nową kopię obiektu stanu
        });
    };

    return (
        <MessageContext.Provider
            value={{ usersMessage, addMessage, removeMessage }}
        >
            {children}
        </MessageContext.Provider>
    );
};

export default MessageContext;

import React, { useEffect, useRef, useState } from "react";
import styles from "./Waiter.module.css";
// import { database, ref, onValue, remove } from "../../../../firebase";
import { database, ref, onValue, remove } from "../../../firebase";
import { update } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Waiter = () => {
    const [statuses, setStatuses] = useState([]);

    const timeoutRefs = useRef({}); // Zamiast jednego timeouta, trzymamy timeouty dla każdego statusu

    useEffect(() => {
        const query = ref(database, "status");
        const unsubscribe = onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const array = Object.entries(data).map(([id, value]) => ({
                    statusId: id,
                    ...value,
                }));
                setStatuses(array.reverse());
            } else {
                setStatuses([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleCheck = (statusId, prevStatus) => {
        const statusRef = ref(database, `status/${statusId}`);

        if (prevStatus) {
            // Jeśli usunięcie jest zaplanowane (isDone jest true), anulujemy je
            clearTimeout(timeoutRefs.current[statusId]); // Anulowanie usunięcia
            timeoutRefs.current[statusId] = null; // Resetowanie timeouta
            update(statusRef, { isDone: false }) // Zaktualizowanie isDone na false
                .then(() => {
                    console.log(
                        `Usunięcie zamówienia ${statusId} zostało anulowane.`
                    );
                })
                .catch((err) => console.log(err));
        } else {
            // Zaktualizuj pole isDone na true i ustaw timeout na usunięcie po 10s
            update(statusRef, { isDone: true })
                .then(() => {
                    console.log(
                        `Zamówienie ${statusId} zostało oznaczone jako zrealizowane.`
                    );

                    // Ustaw timeout, aby usunąć rekord po 10 sekundach
                    // timeoutRefs.current[statusId] = setTimeout(() => {
                    remove(statusRef)
                        .then(() =>
                            console.log(
                                `Zamówienie ${statusId} zostało usunięte po 10 sekundach.`
                            )
                        )
                        .catch((err) => console.log(err));
                    // }, 10000); // 10000 ms = 10 sekund
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <section className={styles.container}>
            {statuses.length > 0 &&
                statuses
                    .filter((fil) => fil.done !== true)
                    .map((el) => (
                        <section
                            key={el.statusId}
                            className={styles.status_cont}
                        >
                            <p className={styles.text}>
                                Stół {el.table}, miejsce {el.seat}
                            </p>
                            <p>{el.message}</p>
                            <button
                                className={styles.button}
                                onClick={() =>
                                    handleCheck(el.statusId, el.isDone)
                                }
                            >
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </button>
                        </section>
                    ))}
        </section>
    );
};

export default Waiter;

import { useState } from "react";
import styles from "./TableMap.module.css";

const TableMap = () => {
    const [selectedPlaces, setSelectedPlaces] = useState([]);

    const handlePlaceClick = (tableIndex, placeIndex) => {
        const placeId = `${tableIndex}-${placeIndex}`;
        if (selectedPlaces.includes(placeId)) {
            setSelectedPlaces(
                selectedPlaces.filter((place) => place !== placeId)
            );
        } else {
            setSelectedPlaces([...selectedPlaces, placeId]);
        }
    };

    return (
        <section className={styles.table_map_container}>
            {[...Array(6)].map((_, tableIndex) => (
                <section key={tableIndex} className={styles.table}>
                    {[...Array(4)].map((_, placeIndex) => (
                        <span
                            key={placeIndex}
                            className={`${styles.place} ${
                                selectedPlaces.includes(
                                    `${tableIndex}-${placeIndex}`
                                )
                                    ? styles.active
                                    : ""
                            }`}
                            onClick={() =>
                                handlePlaceClick(tableIndex, placeIndex)
                            }
                        >
                            {placeIndex + 1}
                        </span>
                    ))}
                </section>
            ))}
        </section>
    );
};

export default TableMap;

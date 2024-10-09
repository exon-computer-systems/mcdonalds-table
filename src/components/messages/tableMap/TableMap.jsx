import styles from "./TableMap.module.css";

const TableMap = ({ selectedPlaces, handlePlaceClick }) => {
    return (
        <section className={styles.table_map_container}>
            {/* Loop through the 6 tables */}
            {[...Array(6)].map((_, tableIndex) => (
                <section key={tableIndex} className={styles.table}>
                    {/* For each table, generate 4 places with unique IDs */}
                    {[...Array(4)].map((_, placeIndex) => {
                        const placeId = tableIndex * 4 + placeIndex + 1; // Generate sequential ID (1 to 24)
                        return (
                            <span
                                key={placeId}
                                className={`${styles.place} ${
                                    selectedPlaces.includes(placeId)
                                        ? styles.active
                                        : ""
                                }`}
                                onClick={() => handlePlaceClick(placeId)}
                            >
                                {placeId}
                            </span>
                        );
                    })}
                </section>
            ))}
        </section>
    );
};

export default TableMap;

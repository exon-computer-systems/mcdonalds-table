import styles from "./TableMap.module.css";
import { tables } from "../../../data/tables";

const TableMap = ({ selectedPlaces, handlePlaceClick }) => {
  const data = tables.map(el => el);
  console.log("table", data);
  return (
    <section className={styles.table_map_container}>
      {tables.map(el => (
        <section key={el.id} className={styles.table}>
          {el.seats.map(seat => {
            const placeId = `${el.id}-${seat}`;
            return (
              <span
                key={placeId}
                className={`${styles.place} ${
                  selectedPlaces.includes(placeId) ? styles.active : ""
                }`}
                onClick={() => handlePlaceClick(el.id, seat)}
              >
                {seat}
              </span>
            );
          })}
        </section>
      ))}
    </section>
  );
};

export default TableMap;

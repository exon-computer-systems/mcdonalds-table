import React, { useEffect, useState } from "react";
import styles from "./Advertisements.module.css";

import ad1 from "../../assets/video/mc_ad1.webm";
import ad2 from "../../assets/video/mc_ad2.webm";

import { database, set, ref, onValue } from "../../../firebase";

const Advertisements = ({ setSensors }) => {
  const [activeTable, setActiveTable] = useState({});

  useEffect(() => {
    const statusRef = ref(database, `status/table`);
    onValue(statusRef, (snapshot) => {
      const data = snapshot.val();

      console.log(data);

      setActiveTable(data);
    });
  }, []);

  return (
    <>
      {activeTable ? (
        <section className={styles.active_table_cont}>
          <h1 className={styles.active_table_text}>
            {`Stół zarezerwowany przez użytkownika ${activeTable.name}`}
          </h1>
        </section>
      ) : (
        <section
          className={styles.container}
          onClick={() =>
            setSensors([
              {
                name: "sensor_1",
                distance: 175,
                isSitTaken: false,
              },
              {
                name: "sensor_2",
                distance: 175,
                isSitTaken: true,
              },
              {
                name: "sensor_3",
                distance: 175,
                isSitTaken: false,
              },
              {
                name: "sensor_4",
                distance: 175,
                isSitTaken: true,
              },
            ])
          }
        >
          <section className={styles.container1}>
            <video autoPlay muted loop>
              <source src={ad1} type="video/mp4" />
            </video>
          </section>
          <section className={styles.container2}>
            <video autoPlay muted loop>
              <source src={ad2} type="video/mp4" />
            </video>
          </section>
        </section>
      )}
    </>
  );
};

export default Advertisements;

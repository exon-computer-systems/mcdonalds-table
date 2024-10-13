import React from "react";
import styles from "./Advertisements.module.css";

import ad1 from "../../assets/video/mc_ad1.mp4";
import ad2 from "../../assets/video/mc_ad2.mp4";

const Advertisements = ({ setSensors }) => {
    return (
        <section
            className={styles.container}
            onClick={() =>
                setSensors([
                    {
                        name: "sensor_1",
                        distance: 175,
                        isSitTaken: true,
                    },
                    {
                        name: "sensor_2",
                        distance: 175,
                        isSitTaken: true,
                    },
                    {
                        name: "sensor_3",
                        distance: 175,
                        isSitTaken: true,
                    },
                    {
                        name: "sensor_4",
                        distance: 175,
                        isSitTaken: false,
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
    );
};

export default Advertisements;

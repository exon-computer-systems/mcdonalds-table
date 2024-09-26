import styles from "./Application.module.css";
const Application = () => {
  return (
    <section className={styles.container}>
      <section className={styles.section_wrapper}>
        <section className={styles.desc_wrapper}>
          <div className={styles.qrImage}>
            <img
              src="https://cdn.mcdonalds.pl/uploads/20230823164713/pobierz-aplikacje-mcdonalds-kod-qr.png"
              alt=""
            />
          </div>
          <h2 className={styles.text}>Pobierz aplikację McDonald's</h2>
          <div className={styles.paragraph}>
            <p>
              Zobacz co przygotowaliśmy dla Ciebie, by Twoje wizyty w McDonald's
              były jeszcze fajniejsze!
            </p>
          </div>
          <div className="applinks"></div>
        </section>

        <img
          src="https://cdn.mcdonalds.pl/uploads/20230919152314/mobile1-2.png"
          alt=""
        />
      </section>
    </section>
  );
};

export default Application;

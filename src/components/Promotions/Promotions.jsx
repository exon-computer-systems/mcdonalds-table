import styles from "./Promotions.module.css";

import PromoSlider from "./PromoSlider";

const Promotions = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Promocje</h1>
      <PromoSlider />
      <PromoSlider />
    </section>
  );
};

export default Promotions;

import styles from "./Card.module.css";
import cardcover from "../../assets/memoryCards/mcdlogo.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    if (!isFlipped && !isDisabled) {
      onClick(index);
    }
  };

  return (
    <section
      className={`${styles.card} ${isFlipped ? styles["is-flipped"] : ""} ${
        isInactive ? styles["is-inactive"] : ""
      }`}
      onClick={handleClick}
    >
      <section className={`${styles.card_face} ${styles.card_front_face}`}>
        <img src={cardcover} alt="card cover" />
      </section>
      <section className={`${styles.card_face} ${styles.card_back_face}`}>
        <img src={card.image} alt="card back" />
      </section>
    </section>
  );
};

export default Card;

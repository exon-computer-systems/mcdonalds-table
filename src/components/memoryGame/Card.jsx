import styles from "./Card.module.css";
import cardcover from "../../assets/memoryCards/mcdlogo.png";
const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <section
      className={`${styles.card} ${isFlipped && styles.is_flipped} ${
        isInactive && styles.is_inactive
      } `}
      onClick={handleClick}
    >
      <section className={`${styles.card_face} ${styles.card_font_face}`}>
        <img src={cardcover} alt="card cover" />
      </section>
      <section className={`${styles.card_face} ${styles.card_back_face}`}>
        <img src={card.image} alt="card cover" />
      </section>
    </section>
  );
};

export default Card;

import styles from "./MemoryGame.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import memory4 from "../../assets/memoryCards/memory4.png";
import memory5 from "../../assets/memoryCards/memory5.png";
import memory6 from "../../assets/memoryCards/memory6.png";
import memory7 from "../../assets/memoryCards/memory7.png";
import memory8 from "../../assets/memoryCards/memory8.png";
import memory9 from "../../assets/memoryCards/memory9.png";

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

const MemoryGame = () => {
  const gameCards = [
    { name: "McWrap", image: memory4 },
    { name: "McZestaw Sniadaniowy", image: memory5 },
    { name: "Happy Meal", image: memory6 },
    { name: "ChickenBox", image: memory7 },
    { name: "Carmel Latte", image: memory8 },
    { name: "Lody z polewa", image: memory9 },
  ];

  const [cards, setCards] = useState(() =>
    shuffleCards(gameCards.concat(gameCards))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState("");
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === gameCards.length) {
      setShowModal("win");
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
    if (moves === 15) {
      setShowModal("lose");
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].name === cards[second].name) {
      setClearedCards(prev => ({ ...prev, [cards[first].name]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = index => {
    if (openCards.length === 1) {
      setOpenCards(prev => [...prev, index]);
      setMoves(moves => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      const timeout = setTimeout(evaluate, 300);
      return () => clearTimeout(timeout);
    }
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const checkIsFlipped = index => {
    return openCards.includes(index);
  };

  const checkIsInactive = card => {
    return Boolean(clearedCards[card.name]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(gameCards.concat(gameCards)));
  };

  return (
    <section className={styles.container}>
      <section className={styles.heading}>
        <h2>Memory</h2>
      </section>
      {showModal === "win" ? (
        <div className={styles.modal}>
          <span>Gratulacje! </span>
          <p>Udało ci się skończyć grę w {moves} ruchach.</p>
          <button className={styles.restart_btn} onClick={handleRestart}>
            Zagraj ponownie
          </button>
        </div>
      ) : (
        <>
          <section className={styles.cards_wrapper}>
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card}
                  index={index}
                  isDisabled={shouldDisableAllCards}
                  isInactive={checkIsInactive(card)}
                  isFlipped={checkIsFlipped(index)}
                  onClick={handleCardClick}
                />
              );
            })}
          </section>
          <section className={styles.footer}>
            <section className={styles.score}>
              <div className={styles.moves}>
                <span className={styles.bold}>Próby: </span> {moves}
              </div>
              {localStorage.getItem("bestScore") && (
                <div className={styles.high_score}>
                  <span className={styles.bold}>Najlepszy wynik: </span>{" "}
                  {bestScore}
                </div>
              )}
            </section>
            <section className={styles.restart}>
              <button className={styles.restart_btn} onClick={handleRestart}>
                Restart
              </button>
            </section>
          </section>
        </>
      )}
    </section>
  );
};

export default MemoryGame;

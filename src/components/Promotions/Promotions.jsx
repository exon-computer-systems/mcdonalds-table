import styles from "./Promotions.module.css";

import PromoSlider from "./PromoSlider";
import { useState } from "react";
import PromoSlider2 from "./PromoSlider2";

const Promotions = () => {
  const [promoSlider, setPromoSlider] = useState([
    {
      itemName: "Super Combo",
      itemPrice: 19,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240301093411/opt/1200x720.png",
    },
    {
      itemName: "Seasonal drinks",
      itemPrice: 0,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240422142213/354217-mccafe-lto-baner-desktop-600x360px.jpg",
    },
    {
      itemName: "Zestaw Bambi",
      itemPrice: [19, 29, 10],
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240909112638/1200x720-co-nowego.jpg",
    },
    {
      itemName: "McMuffin Avocado",
      itemPrice: 0,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20231013155510/co-nowego-1200x720pp.jpg",
    },
    {
      itemName: "McCrispy",
      itemPrice: 0,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20231010161120/600x360-mc-crispy.png",
    },
    {
      itemName: "Maestro Burgers",
      itemPrice: 0,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240227095210/354267-maestro-2024-baner-desktop-600x360px.jpg",
    },
  ]);
  const [promoSlider2, setPromoSlider2] = useState([
    {
      itemName: "3x McRoyal + 20x McNuggets",
      itemPrice: 79,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240830141301/355890-mcdelivery-specjalne-oferty-2-24-09-kv-mcnuggets-mcroyal-kafelek-desktop-784x480px.jpg",
    },
    {
      itemName: "2x McChicken + 2x McRoyal + 4x Frytki",
      itemPrice: 89,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240830141335/355890-mcdelivery-specjalne-oferty-2-24-09-kv-mcchicken-wiesmac-frytki-kafelek-desktop-784x480px.jpg",
    },
    {
      itemName: "ChicenBox + 3x Burger Jalapeno",
      itemPrice: 69,
      itemImg:
        "https://cdn.mcdonalds.pl/uploads/20240830141417/355890-mcdelivery-specjalne-oferty-2-24-09-kv-chb-jalapeno-kafelek-desktop-784x480px.jpg",
    },
  ]);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Promocje</h1>
      <PromoSlider2 promoSlider2={promoSlider2} />
      <PromoSlider promoSlider={promoSlider} />
    </section>
  );
};

export default Promotions;

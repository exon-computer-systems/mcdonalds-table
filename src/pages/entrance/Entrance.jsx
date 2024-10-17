import React, { useEffect, useState } from "react";
import styles from "./Entrance.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/posters/banner1.png";
import banner2 from "../../assets/posters/banner2.png";
import banner3 from "../../assets/posters/banner3.png";

import breakfast1 from "../../assets/menu/breakfast1.jpg";
import breakfast2 from "../../assets/menu/breakfast2.jpg";
import breakfast3 from "../../assets/menu/breakfast3.jpg";
import breakfast4 from "../../assets/menu/breakfast4.jpg";
import breakfast5 from "../../assets/menu/breakfast5.jpg";

import { database, set, ref, onValue } from "../../../firebase";

const Entrance = () => {
  const [name, setName] = useState("");

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    let timeout;
    window.activeTable = (name) => {
      set(ref(database, `status/table`), { name: name });
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        set(ref(database, `status/table`), {});
      }, 60000);

      const statusRef = ref(database, `status/table`);
      onValue(statusRef, (snapshot) => {
        const data = snapshot.val();

        setName(data);

        console.log(data);
      });
    };
  }, []);

  return (
    <section className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        <img className={styles.img} src={breakfast1} alt="promo image" />
        <img className={styles.img} src={breakfast2} alt="promo image" />
        <img className={styles.img} src={breakfast3} alt="promo image" />
        <img className={styles.img} src={breakfast4} alt="promo image" />
        <img className={styles.img} src={breakfast5} alt="promo image" />

        {/* <section className={styles.content}>
          <img className={styles.img} src={banner2} alt="promo image" />
        </section>
        <section className={styles.content}>
          <img className={styles.img} src={banner3} alt="promo image" />
        </section> */}
      </Slider>

      <section className={styles.scan}>
        <h1 className={styles.text}>
          Zrealizuj rezerwację skanując kod qr poniżej
        </h1>
      </section>
    </section>
  );
};

export default Entrance;

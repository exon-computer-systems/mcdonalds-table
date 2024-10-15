import React, { useEffect, useState } from "react";
import styles from "./Entrance.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner3 from "../../assets/posters/banner3long.png";
import banner4 from "../../assets/posters/banner4long.png";
import banner5 from "../../assets/posters/banner5long.png";

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
  };

  useEffect(() => {
    window.activeTable = (name) => {
      set(ref(database, `status/table`), { name: name });

      let timeout = setTimeout(() => {
        set(ref(database, `status/table`), {});
      }, 10000);

      const statusRef = ref(database, `status/table`);
      onValue(statusRef, (snapshot) => {
        const data = snapshot.val();

        setName(data);

        console.log(data);
      });
    };
  }, []);

  return (
    <section className="">
      <Slider {...settings} className={styles.slider}>
        <section className={styles.content}>
          <img className={styles.img} src={banner3} alt="promo image" />
        </section>
        <section className={styles.content}>
          <img className={styles.img} src={banner4} alt="promo image" />
        </section>
        <section className={styles.content}>
          <img className={styles.img} src={banner5} alt="promo image" />
        </section>
      </Slider>

      <h1>{name && name.name}</h1>
    </section>
  );
};

export default Entrance;

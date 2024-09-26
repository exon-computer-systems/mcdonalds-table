import React, { useEffect, useState } from "react";
import "./App.css";
import QuarterScreen from "./components/quarterScreen/QuarterScreen";
import HalfScreen from "./components/halfScreen/HalfScreen";

const App = () => {
  const [rotateQuarter, setRotateQuarter] = useState(false);
  const [rotateHalf, setRotateHalf] = useState(false);

  useEffect(() => {
    const rotateScreen = e => {
      console.log(e.keyCode);

      if (e.keyCode === 49) {
        setRotateQuarter(prev => !prev);
        console.log(rotateQuarter);
      }

      if (e.keyCode === 50) {
        setRotateHalf(prev => !prev);
        console.log(rotateHalf);
      }
    };

    window.addEventListener("keydown", rotateScreen);

    return () => {
      window.removeEventListener("keydown", rotateScreen);
    };
  });

  return (
    <section className="home">
      <QuarterScreen rotate={rotateQuarter} />
      <QuarterScreen rotate={rotateQuarter} />
      <HalfScreen rotate={rotateHalf} />
    </section>
  );
};

export default App;

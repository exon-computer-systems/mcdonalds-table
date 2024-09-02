import React from "react";
import "./App.css";
import QuarterScreen from "./components/quarterScreen/QuarterScreen";
import HalfScreen from "./components/halfScreen/HalfScreen";

const App = () => {
  return (
    <section className="home">
      <QuarterScreen />
      <HalfScreen />
    </section>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import QuarterScreen from "./components/quarterScreen/QuarterScreen";
import HalfScreen from "./components/halfScreen/HalfScreen";

const App = () => {
  const [rotateQuarter, setRotateQuarter] = useState(false);
  const [rotateHalf, setRotateHalf] = useState(false);
    const [rotateQuarter, setRotateQuarter] = useState(false);
    const [rotateHalf, setRotateHalf] = useState(false);

    const [leftSectionFlex, setLeftSectionFlex] = useState([1, 1]);
    const [rightSectionFlex, setRightSectionFlex] = useState([1, 1]);

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
        return () => {
            window.removeEventListener("keydown", rotateScreen);
        };
    });

    const enlargeLeft = (leftIndex) => {
        leftIndex === 1
            ? setLeftSectionFlex([7, 1])
            : setLeftSectionFlex([1, 7]);
    };

    const resetLeft = () => {
        setLeftSectionFlex([1, 1]);
    };

    const enlargeRight = (leftIndex) => {
        leftIndex === 1
            ? setRightSectionFlex([7, 1])
            : setRightSectionFlex([1, 7]);
    };

    const resetRight = () => {
        setRightSectionFlex([1, 1]);
    };

    return (
        <section className="home">
            <section className="home-1">
                <QuarterScreen
                    enlargeLeft={() => enlargeLeft(1)}
                    leftSectionFlex={leftSectionFlex[0]}
                    reset={resetLeft}
                    size1={leftSectionFlex[0]}
                    size2={leftSectionFlex[1]}
                />
                <QuarterScreen
                    enlargeLeft={() => enlargeLeft(2)}
                    leftSectionFlex={leftSectionFlex[1]}
                    reset={resetLeft}
                    equal={leftSectionFlex[0] === leftSectionFlex[1]}
                    size={leftSectionFlex}
                    size1={leftSectionFlex[1]}
                    size2={leftSectionFlex[0]}
                />
            </section>
            <section className="home-2">
                <QuarterScreen
                    enlargeRight={() => enlargeRight(1)}
                    rightSectionFlex={rightSectionFlex[0]}
                    reset={resetRight}
                    size1={rightSectionFlex[0]}
                    size2={rightSectionFlex[1]}
                />
                {/* <QuarterScreen
                    enlargeRight={() => enlargeRight(2)}
                    rightSectionFlex={rightSectionFlex[1]}
                    reset={resetRight}
                    size1={rightSectionFlex[1]}
                    size2={rightSectionFlex[0]}
                /> */}
            </section>
        </section>
    );
};

export default App;

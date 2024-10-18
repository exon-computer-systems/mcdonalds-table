import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import QuarterScreen from "./components/quarterScreen/QuarterScreen";
import WelcomePage from "./components/welcomePage/WelcomePage";
import useMessages from "./hooks/useMessage";
import Advertisements from "./components/advertisements/Advertisements";

import { database, set, ref } from "../firebase";

import axios from "axios";

const App = () => {
  const { addMessage } = useMessages();
  const [sectionFlex, setSectionFlex] = useState({
    left1: 1,
    left2: 1,
    right1: 1,
    right2: 1,
  });

  const [playWelcome, setPlayWelcome] = useState(false);
  const [showScreens, setShowsScreen] = useState(false);

  const prevSensors = useRef([]);
  const hasDetectedTrue = useRef(false);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const [sensors, setSensors] = useState([
    { name: "sensor_1", distance: 175, isSitTaken: false },
    { name: "sensor_2", distance: 175, isSitTaken: false },
    { name: "sensor_3", distance: 175, isSitTaken: false },
    { name: "sensor_4", distance: 175, isSitTaken: false },
  ]);

  const enlargeLeft = (section) => {
    setSectionFlex({
      ...sectionFlex,
      left1: section === "left1" ? 7 : 1,
      left2: section === "left2" ? 7 : 1,
    });
  };

  const enlargeRight = (section) => {
    setSectionFlex({
      ...sectionFlex,
      right1: section === "right1" ? 7 : 1,
      right2: section === "right2" ? 7 : 1,
    });
  };

  const resetLeft = () => {
    setSectionFlex({
      ...sectionFlex,
      left1: 1,
      left2: 1,
    });
  };

  const resetRight = () => {
    setSectionFlex({
      ...sectionFlex,
      right1: 1,
      right2: 1,
    });
  };

  const simulateApi = () => {
    const updatedSensors = sensors.map((sensor) => {
      // Losowa wartość true/false dla isSitTaken
      const isSitTaken = Math.random() > 0.8;
      return { ...sensor, isSitTaken };
    });
    return { sensors: updatedSensors };
  };

  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const res = await axios.get("http://localhost:3000/sensors/api");
        const newSensors = res.data.sensors;

        // Porównaj nowe sensory z poprzednimi
        const hasChanged = newSensors.some(
          (sensor, index) =>
            sensor.isSitTaken !== prevSensors.current[index]?.isSitTaken
        );

        // Aktualizuj stan tylko, jeśli dane się zmieniły
        if (hasChanged) {
          const anySensorsTrue = newSensors.some(
            (sensor) => sensor.isSitTaken === true
          );
          const allSensorsFalse = newSensors.every(
            (sensor) => sensor.isSitTaken === false
          );

          if (!hasDetectedTrue.current && anySensorsTrue) {
            setPlayWelcome(true);
            set(ref(database, `status/table`), {});
            setTimeout(() => setShowsScreen(true), 2000);

            hasDetectedTrue.current = true;

            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
          }

          if (hasDetectedTrue.current && allSensorsFalse) {
            if (!timeoutRef.current) {
              timeoutRef.current = setTimeout(() => {
                setPlayWelcome(true);
                setTimeout(() => setShowsScreen(false), 2000);
                hasDetectedTrue.current = false;
                timeoutRef.current = null;
              }, 3000);
            }
          }

          setSensors(newSensors); // Aktualizuj stan, jeśli są zmiany
          prevSensors.current = newSensors; // Zaktualizuj poprzednie sensory
        }
      } catch (err) {
        console.log(err);
      }
    };

    intervalRef.current = setInterval(fetchSensors, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    let inactivityTimeout;

    const resetInactivityTimer = () => {
      if (inactivityTimeout) clearTimeout(inactivityTimeout);

      inactivityTimeout = setTimeout(() => {
        setPlayWelcome(true);
        setTimeout(() => setShowsScreen(false), 2000);
      }, 12000); // 2 minutes
    };

    // Nasłuchiwanie zdarzeń użytkownika
    window.addEventListener("click", resetInactivityTimer);
    window.addEventListener("touch", resetInactivityTimer);

    // Resetowanie timera za każdym razem, gdy komponent się odmontuje
    return () => {
      if (inactivityTimeout) clearTimeout(inactivityTimeout);
      window.removeEventListener("click", resetInactivityTimer);
      window.removeEventListener("touch", resetInactivityTimer);
    };
  });

  return (
    <>
      {playWelcome && <WelcomePage setPlayWelcome={setPlayWelcome} />}
      {!showScreens ? (
        <Advertisements setSensors={setSensors} />
      ) : (
        <section className="home">
          <section className="home-1">
            {sensors[0].isSitTaken && (
              <QuarterScreen
                id={1}
                enlarge={() => enlargeLeft("left1")}
                reset={resetLeft}
                size={sectionFlex.left1}
                isReduced={
                  sectionFlex.left1 < sectionFlex.left2 && sectionFlex.left1 < 7
                }
                isSingle={!sensors[1].isSitTaken}
              />
            )}

            {sensors[1].isSitTaken && (
              <QuarterScreen
                id={2}
                enlarge={() => enlargeLeft("left2")}
                reset={resetLeft}
                size={sectionFlex.left2}
                isReduced={
                  sectionFlex.left2 < sectionFlex.left1 && sectionFlex.left2 < 7
                }
                isSingle={!sensors[0].isSitTaken}
              />
            )}
          </section>
          <section className="home-2">
            {sensors[2].isSitTaken && (
              <QuarterScreen
                id={3}
                enlarge={() => enlargeRight("right1")}
                reset={resetRight}
                size={sectionFlex.right1}
                isReduced={
                  sectionFlex.right1 < sectionFlex.right2 &&
                  sectionFlex.right1 < 7
                }
                isSingle={!sensors[3].isSitTaken}
              />
            )}

            {sensors[3].isSitTaken && (
              <QuarterScreen
                id={4}
                enlarge={() => enlargeRight("right2")}
                reset={resetRight}
                size={sectionFlex.right2}
                isReduced={
                  sectionFlex.right2 < sectionFlex.right1 &&
                  sectionFlex.right2 < 7
                }
                isSingle={!sensors[2].isSitTaken}
              />
            )}
          </section>
        </section>
      )}
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import QuarterScreen from "./components/quarterScreen/QuarterScreen";
import HalfScreen from "./components/halfScreen/HalfScreen";
import WelcomePage from "./components/welcomePage/WelcomePage";
import { v4 as uuidv4 } from "uuid";
import useMessages from "./hooks/useMessage";
import Advertisements from "./components/advertisements/Advertisements";

const App = () => {
    const { addMessage } = useMessages();

    // const [inactive, setInactive] = useState(true);
    const [sectionFlex, setSectionFlex] = useState({
        left1: 1,
        left2: 1,
        right1: 1,
        right2: 1,
    });

    const [playAds, setPlayAds] = useState(true);
    const [playWelcome, setPlayWelcome] = useState(false);
    const [sensors, setSensors] = useState([
        {
            name: "sensor_1",
            distance: 175,
            isSitTaken: false,
        },
        {
            name: "sensor_2",
            distance: 175,
            isSitTaken: false,
        },
        {
            name: "sensor_3",
            distance: 175,
            isSitTaken: false,
        },
        {
            name: "sensor_4",
            distance: 175,
            isSitTaken: false,
        },
    ]);

    // const sensors = {
    //     sensor_1: {
    //         name: "sensor_1",
    //         distance: 37,
    //         isSitTaken: true,
    //     },
    //     sensor_2: {
    //         name: "sensor_2",
    //         distance: 37,
    //         isSitTaken: true,
    //     },
    //     sensor_3: {
    //         name: "sensor_3",
    //         distance: 37,
    //         isSitTaken: false,
    //     },
    //     sensor_4: {
    //         name: "sensor_4",
    //         distance: 37,
    //         isSitTaken: true,
    //     },
    // };

    // Control size of left screens using flexbox grow
    const enlargeLeft = (section) => {
        setSectionFlex({
            ...sectionFlex,
            left1: section === "left1" ? 7 : 1,
            left2: section === "left2" ? 7 : 1,
        });
    };

    // Control size of right screens using flexbox grow
    const enlargeRight = (section) => {
        setSectionFlex({
            ...sectionFlex,
            right1: section === "right1" ? 7 : 1,
            right2: section === "right2" ? 7 : 1,
        });
    };

    // Reset left screens to default 1:1
    const resetLeft = () => {
        setSectionFlex({
            ...sectionFlex,
            left1: 1,
            left2: 1,
        });
    };

    // Reset right screens to default 1:1
    const resetRight = () => {
        setSectionFlex({
            ...sectionFlex,
            right1: 1,
            right2: 1,
        });
    };

    useEffect(() => {
        let timeout;
        if (sensors.find((el) => el.isSitTaken === true)) {
            setPlayWelcome(true);
            timeout = setTimeout(() => {
                setPlayAds(false);
                // setPlayWelcome(false);
            }, 2000);
            setTimeout(() => setPlayWelcome(false), 15000);
        } else {
            setPlayAds(true);
            setPlayWelcome(false);
        }

        return () => clearTimeout(timeout);
    }, [sensors]);

    return (
        <>
            {playWelcome && <WelcomePage />}
            {playAds ? (
                <Advertisements setSensors={setSensors} />
            ) : (
                <section
                    className="home"
                    onClick={() =>
                        addMessage([1, 2], {
                            author: "Patrys",
                            message: "Siemanko",
                        })
                    }
                >
                    <section className="home-1">
                        {sensors[0].isSitTaken && (
                            <QuarterScreen
                                id={1}
                                enlarge={() => enlargeLeft("left1")}
                                reset={resetLeft}
                                size={sectionFlex.left1}
                                isReduced={
                                    sectionFlex.left1 < sectionFlex.left2 &&
                                    sectionFlex.left1 < 7
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
                                    sectionFlex.left2 < sectionFlex.left1 &&
                                    sectionFlex.left2 < 7
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

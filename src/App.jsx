import React, { useEffect, useState } from "react";
import "./App.css";
import QuarterScreen from "./components/quarterScreen/QuarterScreen";
import HalfScreen from "./components/halfScreen/HalfScreen";
import WelcomePage from "./components/welcomePage/WelcomePage";
import { v4 as uuidv4 } from "uuid";
import useMessages from "./hooks/useMessage";

const App = () => {
    const { addMessage } = useMessages();

    const [rotateQuarter, setRotateQuarter] = useState(false);
    const [rotateHalf, setRotateHalf] = useState(false);
    // const [inactive, setInactive] = useState(true);
    const [leftSectionFlex, setLeftSectionFlex] = useState([1, 1]);
    const [rightSectionFlex, setRightSectionFlex] = useState([1, 1]);

    // const sensors = [
    //     {
    //         name: "sensor_1",
    //         distance: 175,
    //         isSitTaken: false,
    //     },
    //     {
    //         name: "sensor_2",
    //         distance: 175,
    //         isSitTaken: false,
    //     },
    //     {
    //         name: "sensor_3",
    //         distance: 175,
    //         isSitTaken: true,
    //     },
    //     {
    //         name: "sensor_4",
    //         distance: 175,
    //         isSitTaken: false,
    //     },
    // ];

    const sensors = {
        sensor_1: {
            name: "sensor_1",
            distance: 37,
            isSitTaken: true,
        },
        sensor_2: {
            name: "sensor_2",
            distance: 37,
            isSitTaken: true,
        },
        sensor_3: {
            name: "sensor_3",
            distance: 37,
            isSitTaken: false,
        },
        sensor_4: {
            name: "sensor_4",
            distance: 37,
            isSitTaken: true,
        },
    };

    // const initialMessages = {
    //     1: [],
    //     2: [],
    //     3: [],
    //     4: [],
    // };

    // const reducer = (state, action) => {
    //     switch(action.type) {
    //         case "SEND_MESSAGES": {
    //             console.log(action.ids);

    //             ids.array.forEach(el => {
    //                 initialMessages.el = [action.message, ]
    //             });
    //         }
    //     }
    // }

    // const sendMessage = (ids, message) => {
    //     setUsersMessages((prev) => {
    //         ids.forEach((el) => {
    //             console.log(prev["seat" + el]);
    //             prev["seat" + el] = [
    //                 { id: uuidv4(), ...message },
    //                 ...prev["seat" + el],
    //             ];
    //             return prev["seat" + el];
    //         });
    //         return prev;
    //     });
    // };

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
        <>
            <section
                className="home"
                onClick={() =>
                    addMessage([1, 2], {
                        author: "Patrys",
                        message: "Siemanko",
                    })
                }
            >
                {/* <WelcomePage /> */}
                <section className="home-1">
                    {sensors.sensor_1.isSitTaken && (
                        <QuarterScreen
                            id={1}
                            enlargeLeft={() => enlargeLeft(1)}
                            leftSectionFlex={leftSectionFlex[0]}
                            reset={resetLeft}
                            size1={leftSectionFlex[0]}
                            size2={leftSectionFlex[1]}
                            // usersMessage={usersMessage}
                            // sendMessage={sendMessage}
                        />
                    )}

                    {sensors.sensor_2.isSitTaken && (
                        <QuarterScreen
                            id={2}
                            enlargeLeft={() => enlargeLeft(2)}
                            leftSectionFlex={leftSectionFlex[1]}
                            reset={resetLeft}
                            size1={leftSectionFlex[1]}
                            size2={leftSectionFlex[0]}
                            // usersMessage={usersMessage}
                            // sendMessage={sendMessage}
                        />
                    )}
                </section>
                <section className="home-2">
                    {sensors.sensor_3.isSitTaken && (
                        <QuarterScreen
                            id={3}
                            enlargeRight={() => enlargeRight(1)}
                            rightSectionFlex={rightSectionFlex[0]}
                            reset={resetRight}
                            size1={rightSectionFlex[0]}
                            size2={rightSectionFlex[1]}
                            // usersMessage={usersMessage}
                            // sendMessage={sendMessage}
                        />
                    )}

                    {sensors.sensor_4.isSitTaken && (
                        <QuarterScreen
                            id={4}
                            enlargeRight={() => enlargeRight(2)}
                            rightSectionFlex={rightSectionFlex[1]}
                            reset={resetRight}
                            size1={rightSectionFlex[1]}
                            size2={rightSectionFlex[0]}
                            // usersMessage={usersMessage}
                            // sendMessage={sendMessage}
                        />
                    )}
                </section>
            </section>
        </>
    );
};

export default App;

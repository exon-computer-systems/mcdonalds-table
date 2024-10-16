import styles from "./AlertMsg.module.css";
import { motion } from "framer-motion";
import {useEffect, useRef} from "react"
import mcdonald from "../../assets/sounds/mcdonald_sound.mp3"
const AlertMsg = ({ children, alertType }) => {
    let mySound = new Audio(mcdonald)
    const soundRef = useRef()
    useEffect(() => {
        soundRef.current = mySound.play()
    }, [])
    return (
        <>
        <motion.section
            ref={soundRef}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -100, opacity: [1, 0], display: "none" }}
            transition={{
                opacity: {
                    duration: 5,
                    times: [0, 0.5, 1],
                    ease: "easeInOut",
                },
                y: {
                    duration: 3,
                },
                display: {
                    delay: 3,
                },
            }}
            className={alertType === "success" ? styles.success : styles.failed}
        >
            {children}
            
        </motion.section>

        </>
    );
};

export default AlertMsg;

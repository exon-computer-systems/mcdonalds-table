import styles from "./WelcomePage.module.css";
import { delay, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
// import mclogo from "../../assets/logo/mc_logo.svg";

const WelcomePage = () => {
  const controls = useAnimation(); // Using controls to animate based on a sequence

  useEffect(() => {
    const animateSequence = async () => {
      // Step 1: Move from -5000 to 0
      await controls.start({ x: 0, transition: { duration: 1.5 } });

      // Step 2: Wait at x: 0 for 10 seconds
      await controls.start({ x: 0, transition: { delay: 5 } });

      // Step 3: Move from 0 to 5000
      await controls.start({ x: 5000, transition: { duration: 1.2 } });
    };

    animateSequence(); // Run the sequence on component mount
  }, [controls]);

  return (
    <motion.section
      initial={{ x: -5000, y: 0, zIndex: 10 }} // Start at x: -5000
      animate={controls} // Use controls for custom animation
      className={styles.container}
    >
      <motion.section
        initial={{ x: 0, y: 520 }}
        animate={{ x: 0, y: 0, scale: 1.2 }}
        transition={{ duration: 1, delay: 1 }}
        className={styles.logo_wrapper}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          height="238.5"
          width="272.7"
          viewBox="0 0 272.70001 238.5"
          initial="hidden"
          animate={{ scale: [1.3, 1.1, 1, 0.9, 1.1, 1.2], x: [0, -500, 500] }}
          transition={{
            scale: {
              duration: 6,
              times: [0.4, 0.9, 0.4, 0.6, 0.8, 1],
              ease: "easeInOut",
            },
            x: {
              duration: 3,
              times: [0, 0.3, 1],
              delay: 5.2,
              ease: "easeInOut",
            },
          }}
        >
          <motion.path
            fill="transparent"
            stroke="#fc0"
            strokeWidth="3"
            d="m195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="#fc0"
            stroke="transparent"
            d="m195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3,
              duration: 0.5,
            }}
          />
        </motion.svg>
      </motion.section>
    </motion.section>
  );
};

export default WelcomePage;

import styles from "./WelcomePage.module.css";
import { delay, motion } from "framer-motion";
// import mclogo from "../../assets/logo/mc_logo.svg";

const WelcomePage = () => {
  return (
    <motion.section
      initial={{ x: 0, y: 0, zIndex: 10 }}
      animate={{ x: [-5000, 0, 0, 5000], y: 0 }}
      transition={{
        x: {
          duration: 8,
          times: [0, 0.2, 0.8, 1, 0.2, 0.3, 1],
          ease: "easeInOut",
        },
      }}
      className={styles.container}
    >
      <motion.section
        initial={{ x: 0, y: 520 }}
        animate={{ x: 0, y: 0, scale: 1.2 }}
        transition={{ duration: 1, delay: 2 }}
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
              duration: 4, // Total duration of scale animation
              times: [0.4, 0.9, 0.4, 0.6, 0.8, 1], // Specify the timing for each scale step
              ease: "easeInOut", // Easing for smooth transition
              delay: 2,
            },
            x: {
              duration: 4, // Same duration for x movement
              times: [0, 0.4, 1], // Timing for each x movement stage
              delay: 3,
              ease: "easeInOut", // Smooth easing
            },
          }}
        >
          <motion.path
            fill="transparent" // Start with transparent fill
            stroke="#fc0" // Set stroke to yellow (as in your original path)
            strokeWidth="3"
            d="m195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8"
            initial={{ pathLength: 0, pathOffset: 1 }} // Start drawing from left to right
            animate={{ pathLength: 1, pathOffset: 0 }} // Complete the drawing from left to right
            transition={{
              duration: 4, // Duration for the drawing animation
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="#fc0" // Set the final fill color to yellow
            stroke="transparent" // Remove the stroke at the end
            d="m195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8"
            initial={{ opacity: 0 }} // Start with the fill hidden
            animate={{ opacity: 1 }} // Fade in the fill after the stroke drawing
            transition={{
              delay: 4, // This delay matches the duration of the stroke animation
              duration: 0.2, // How long the fill transition will take
              //   ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.section>
    </motion.section>
  );
};

export default WelcomePage;

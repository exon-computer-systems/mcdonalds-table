import styles from "./AlertMsg.module.css";
import { motion } from "framer-motion";
const AlertMsg = ({ children, alertType }) => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -100, opacity: [1, 0], display: "none" }}
      transition={{
        opacity: {
          duration: 10,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
        y: {
          duration: 6,
        },
        display: {
          delay: 3,
        },
      }}
      className={alertType === "success" ? styles.success : styles.failed}
    >
      {children}
    </motion.section>
  );
};

export default AlertMsg;

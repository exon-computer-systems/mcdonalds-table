import styles from "./AlertMsg.module.css";
import { motion } from "framer-motion";
const AlertMsg = ({ children, alertType }) => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -100, opacity: [1, 0], display: "none" }}
      transition={{
        opacity: {
          duration: 3,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
        y: {
          duration: 2,
        },
        display: {
          delay: 1.5,
        },
      }}
      className={alertType === "success" ? styles.success : styles.failed}
    >
      {children}
    </motion.section>
  );
};

export default AlertMsg;

import { CounterState } from "../state/CounterState";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const boxVariants = {
  hidden: { y: -50 },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const hoverAnimation = {
  scale: 1.1,
  transition: {
    type: "spring",
    stiffness: 300,
  },
};

export default function Counter() {
  const controls = useAnimation();

  const { count, increaseCount, decreaseCount } = CounterState();

  useEffect(() => {
    controls.start("show");
  }, [count, controls]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>total counter:</h1>
        <motion.h1
          key={String(count)}
          variants={boxVariants}
          initial='hidden'
          animate={controls}>
          {count > 9 ? count : "0" + count.toFixed()}
        </motion.h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2vmax",
        }}>
        <motion.button
          whileHover={hoverAnimation}
          onClick={decreaseCount}>
          -1
        </motion.button>
        <motion.button
          whileHover={hoverAnimation}
          onClick={increaseCount}>
          +1
        </motion.button>
      </div>
    </div>
  );
}

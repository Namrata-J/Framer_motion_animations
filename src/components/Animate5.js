import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Animate5 = () => {
  const x1 = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x1, [-150, 150], [-180, 180]);
  const scale = useTransform(x1, [-150, 150], [1.5, 0.5]);
  const rotateX = useTransform(y, [-100, 100], [-90, 90]);
  const rotateY = useTransform(x, [-100, 100], [-90, 90]);

  const boxStyle = {
    width: "100px",
    height: "100px",
    background: "orange",
    borderRadius: "1rem",
  };

  const variants = {
    hover: { opacity: 0.5 },
    tap: { scale: 1.2 },
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "center",
        perspective: 800,
      }}
    >
      <motion.div
        style={boxStyle}
        variants={variants}
        drag
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        dragConstraints={{ top: -100, left: -200, right: 200, bottom: 100 }}
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        drag
        dragDirectionLock
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        dragConstraints={{ top: -100, left: -200, right: 200, bottom: 100 }}
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
      <motion.div
        style={{ ...boxStyle, ...{ x: x1, rotate, scale } }}
        variants={variants}
        drag="x"
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
      <motion.div
        style={{ ...boxStyle, ...{ x, y, rotateX, rotateY } }}
        variants={variants}
        drag
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
};

export { Animate5 };

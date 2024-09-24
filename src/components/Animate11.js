import React from "react";
import { motion } from "framer-motion";

const Animate11 = () => {
  const boxStyle = {
    width: 100,
    height: 100,
    background: "orange",
    borderRadius: "1rem",
    position: "relative",
  };

  const parent1 = {
    variantA: { scale: 1 },
    variantB: { scale: 1.5 },
  };

  const child = {
    variantA: { bottom: 0, right: 0, rotate: 0 },
    variantB: { top: 0, left: 0, rotate: 90 },
  };

  const parent2 = {
    stage1: { rotate: 90 },
    stage2: { rotate: 0 },
  };

  const item = {
    stage1: { scale: 0 },
    stage2: { scale: 1 },
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        flexWrap: "wrap",
      }}
    >
      <motion.div
        style={boxStyle}
        variants={parent1}
        initial="variantA"
        whileHover="variantB"
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            borderRadius: "0.7rem",
            background: "white",
            position: "absolute",
          }}
          variants={child}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
        ></motion.div>
      </motion.div>
      <motion.div
        style={{
          ...boxStyle,
          ...{
            display: "flex",
            gap: "0px 22px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        variants={parent2}
        initial="stage1"
        animate="stage2"
        transition={{
          type: "spring",
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
      >
        {[1, 2, 3, 4].map((child) => (
          <motion.div
            style={{
              width: 20,
              height: 20,
              borderRadius: "1rem",
              background: "white",
            }}
            variants={item}
            transition={{
              type: "spring",
            }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export { Animate11 };

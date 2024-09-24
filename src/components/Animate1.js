import React from "react";
import { motion } from "framer-motion";

const Animate1 = () => {
  const boxStyle = {
    width: "100px",
    height: "100px",
    background: "orange",
    borderRadius: "1rem",
  };

  const variants = { animate: { rotate: 360 } };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={boxStyle}
        variants={variants}
        animate="animate"
        transition={{
          duration: 3,
        }}
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        animate="animate"
        transition={{
          type: "spring",
          mass: 50,
          stiffness: 70,
          damping: 50,
        }}
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        animate="animate"
        transition={{
          duration: 3,
          type: "spring",
          bounce: 0.6,
        }}
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        animate="animate"
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        animate="animate"
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      ></motion.div>
    </div>
  );
};

export { Animate1 };

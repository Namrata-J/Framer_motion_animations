import React from "react";
import { motion } from "framer-motion";

const Animate2 = () => {
  const boxStyle = {
    width: "100px",
    height: "100px",
    background: "orange",
    borderRadius: "1rem",
  };

  const variants = {
    hover: { rotate: 360 },
    tap: {
      rotate: 90,
      scale: 0.5,
    },
    hover1: {
      opacity: 0.5,
    },
    tap1: {
      scale: 1.1,
      boxShadow: "0 0 2px 0.5px black",
    },
    drag: {
      boxShadow: "0 0 5px 1px black",
    },
  };

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
        whileHover="hover"
        transition={{
          duration: 2,
        }}
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        whileTap="tap"
      ></motion.div>
      <motion.div
        style={boxStyle}
        variants={variants}
        drag
        whileHover="hover1"
        whileTap="tap1"
        whileDrag="drag"
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export { Animate2 };

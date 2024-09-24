import React from "react";
import { motion } from "framer-motion";

const Animate8 = () => {
  return (
    <motion.div
      style={{
        width: 30,
        height: 30,
        borderRadius: "0.2rem",
      }}
      animate={{
        x: [-50, 50, 50, -50, -50],
        y: [-50, -50, 50, 50, -50],
        rotate: 360,
        backgroundColor: ["#fd3", "#60f", "#fd3"],
      }}
      transition={{ duration: 4, ease: "linear", repeat: Infinity }}
    ></motion.div>
  );
};

export { Animate8 };

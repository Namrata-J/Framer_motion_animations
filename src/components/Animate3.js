import React from "react";
import { motion, useCycle } from "framer-motion";

const Animate3 = () => {
  const [animate, cycle] = useCycle(
    { scale: 0.5 },
    { scale: 0.8 },
    { scale: 1.2 }
  );

  const boxStyle = {
    width: "100px",
    height: "100px",
    background: "orange",
    borderRadius: "1rem",
  };

  const variants = {
    hover: { rotate: 360 },
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
        animate={animate}
        onTap={cycle}
      ></motion.div>
    </div>
  );
};

export { Animate3 };

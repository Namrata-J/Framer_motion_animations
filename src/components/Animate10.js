import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Animate10 = () => {
  const x = useMotionValue(150);
  const y = useMotionValue(150);
  const rotateX = useTransform(y, [0, 300], [45, -45]);
  const rotateY = useTransform(x, [0, 300], [-45, 45]);

  const handleCursorMovement = (e) => {
    const rec = e.target.getBoundingClientRect();
    x.set(e.clientX - rec.left);
    y.set(e.clientY - rec.top);
  };

  return (
    <div
      style={{
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
        background: "rgba(0, 0, 0, 0.5)",
        perspective: 400,
      }}
      onMouseMove={handleCursorMovement}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "orange",
          borderRadius: "1rem",
          rotateX,
          rotateY,
        }}
      ></motion.div>
    </div>
  );
};

export { Animate10 };

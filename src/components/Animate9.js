import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Animate9 = () => {
  const x = useMotionValue(0);
  const bgColor = useTransform(x, [-100, 100], ["#fff", "#000"]);
  const [isHover, setIsHover] = useState(false);
  const [isDrag, setIsDrag] = useState(false);

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        borderRadius: "1rem",
        x,
        backgroundColor: bgColor,
      }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragStart={() => setIsDrag(true)}
      onDragEnd={() => setIsDrag(false)}
      whileHover={{
        scale: 0.5,
        rotate: 90,
        background: isHover && isDrag ? bgColor : "#fc9d03",
      }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export { Animate9 };

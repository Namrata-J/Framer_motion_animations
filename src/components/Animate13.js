import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Card = ({ index, setIndex, frontCard }) => {
  const x = useMotionValue(0);
  const rotateX = useTransform(x, [-200, 200], [-180, 180]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 200) {
      setIndex((index) => index + 1);
    }
    if (info.offset.x < 200) {
      setIndex((index) => index + 1);
    }
  };

  return (
    <motion.div
      style={{
        width: frontCard ? 100 : 70,
        height: frontCard ? 100 : 70,
        background: frontCard ? "orange" : "rgba(247, 137, 87, 0.3)",
        borderRadius: "1rem",
        position: "absolute",
        top: frontCard ? 0 : 40,
        cursor: "grab",
        x,
        rotate: rotateX,
      }}
      drag={frontCard ? "x" : "none"}
      initial={frontCard ? {} : { top: 20, scale: 1.4 }}
      animate={frontCard ? {} : { top: 40, scale: 1 }}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      onDragEnd={handleDragEnd}
      transition={
        frontCard
          ? {
              type: "spring",
              stiffness: 300,
              damping: 20,
            }
          : {}
      }
    ></motion.div>
  );
};

const Animate13 = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        position: "relative",
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        <Card key={index + 1} index={index} frontCard={false} />
        <Card key={index} index={index} setIndex={setIndex} frontCard={true} />
      </AnimatePresence>
    </div>
  );
};

export { Animate13 };

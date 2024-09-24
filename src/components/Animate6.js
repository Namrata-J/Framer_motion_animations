import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Animate6 = () => {
  const containerSize = 200;
  const items = [1, 2, 3, 4, 5];
  const itemHeight = 50;
  const itemVerticalMargin = 10;

  const calculateDraggableContainerHeight = (height) => {
    const result = (height + itemVerticalMargin) * items?.length;
    return result;
  };

  const y = useMotionValue(0);
  const width = useTransform(
    y,
    [0, -calculateDraggableContainerHeight(itemHeight) + containerSize],
    ["0%", "100%"]
  );
  const scale = useTransform(y, [0, 100], [0, 2]);
  const opacity = useTransform(y, [0, 100], [0, 1]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: containerSize,
          height: containerSize,
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "1rem 1rem 0 0",
          position: "relative",
          top: "-50px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "white",
            position: "absolute",
            top: "25px",
            left: "calc(50% - 5px)",
            scale,
            opacity,
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "100%",
            height: calculateDraggableContainerHeight(itemHeight),
            padding: "10px",
            y,
          }}
          drag="y"
          dragConstraints={{
            top: -calculateDraggableContainerHeight(itemHeight) + containerSize,
            bottom: 0,
          }}
        >
          {items.map((item) => (
            <motion.div
              style={{
                height: itemHeight,
                width: "100%",
                margin: "0 0 10px 0",
                background: "orange",
                borderRadius: "1rem",
              }}
            ></motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        style={{
          width,
          height: "5px",
          background: "black",
          position: "relative",
          top: "-50px",
        }}
      ></motion.div>
    </div>
  );
};

export { Animate6 };

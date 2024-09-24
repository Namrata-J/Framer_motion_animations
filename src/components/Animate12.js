import React, { useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const Animate12 = () => {
  const item1 = [1, 2, 3, 4];
  const item2 = [3, 1, 4, 2];
  const item3 = [4, 3, 2, 1];
  const item4 = [2, 4, 1, 3];
  const colors = ["#f44", "#3f0", "#fb0", "#0ef"];

  const [current, cycle] = useCycle("on", "off");
  const [items, setItems] = useCycle(item1, item2, item3, item4);

  const parent = {
    on: { scale: 1 },
    off: { scale: 0 },
  };

  const child = {
    on: { left: 2 },
    off: { left: 22 },
  };

  useEffect(() => {
    setTimeout(() => setItems(), 1000);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <motion.div
        style={{
          width: 50,
          height: 30,
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "1rem",
          position: "relative",
        }}
        animate={current}
        onTap={cycle}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            background: "orange",
            borderRadius: "1rem",
          }}
          variants={parent}
          transition={{
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: 25,
            height: 25,
            background: "white",
            borderRadius: "1rem",
            position: "absolute",
            top: 2,
          }}
          variants={child}
          transition={{
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
      <div
        style={{
          width: "auto",
          height: "auto",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "1rem",
          display: "grid",
          gridGap: 10,
          gridTemplateColumns: "auto auto",
          padding: 10,
        }}
      >
        {items.map((item, index) => (
          <motion.div
            style={{
              height: 30,
              width: 30,
              borderRadius: "0.6rem",
              background: colors[index],
            }}
            key={item}
            layout
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export { Animate12 };

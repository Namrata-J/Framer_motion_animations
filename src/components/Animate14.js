import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";

const Animate14 = () => {
  const [count, setCount] = useState(0);
  const tabs = [
    { name: "Red", color: "#f00" },
    { name: "Purple", color: "#b1f" },
    { name: "Orange", color: "#f90" },
    { name: "Green", color: "#0c0" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        padding: 10,
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "2rem",
      }}
    >
      {tabs.map((tab, index) => (
        <motion.div
          key={index}
          style={{
            color: "white",
            padding: "5px 10px",
            position: "relative",
            borderRadius: "1rem",
          }}
          onTap={() => {
            setCount(index);
          }}
          transition={{ duration: 2 }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {tab.name}
          </div>
          {index === count && (
            <motion.div
              layoutId="count"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              animate={{
                background: tabs[index].color,
              }}
            ></motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export { Animate14 };

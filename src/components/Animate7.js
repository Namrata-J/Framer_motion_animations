import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Animate7 = () => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 0.15], [0, 1]);
  const [showStar, setShowStar] = useState(true);

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.2)",
      }}
      animate={{
        scale: showStar ? 1.2 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      onTap={() => setShowStar((flag) => !flag)}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.28643 1.90809C8.06375 0.616445 9.93634 0.616446 10.7137 1.90809L12.6008 5.04393L16.1664 5.86971C17.635 6.20985 18.2137 7.99079 17.2254 9.12921L14.8263 11.893L15.1427 15.5393C15.273 17.0411 13.7581 18.1418 12.37 17.5537L9.00004 16.126L5.63008 17.5537C4.24201 18.1418 2.72705 17.0411 2.85739 15.5393L3.17384 11.893L0.774641 9.12921C-0.213577 7.99079 0.365088 6.20985 1.83371 5.86971L5.39925 5.04393L7.28643 1.90809ZM9.00004 2.93936L7.11287 6.0752C6.83361 6.53922 6.37811 6.87016 5.85051 6.99236L2.28497 7.81814L4.68417 10.582C5.03919 10.991 5.21317 11.5264 5.16635 12.066L4.8499 15.7122L8.21987 14.2845C8.71853 14.0732 9.28156 14.0732 9.78022 14.2845L13.1502 15.7122L12.8337 12.066C12.7869 11.5264 12.9609 10.991 13.3159 10.582L15.7151 7.81814L12.1496 6.99236C11.622 6.87016 11.1665 6.53922 10.8872 6.0752L9.00004 2.93936Z"
          fill-opacity="0.56"
          fill="#1A2E62"
          strokeWidth="0.8"
          stroke="#1A2E62"
          strokeDasharray="0 1"
          animate={{ pathLength: 1, pathOffset: showStar ? 0.9 : 0 }}
          style={{ pathOffset: pathLength, opacity }}
          transition={{ duration: 2 }}
        />
      </svg>
    </motion.div>
  );
};

export { Animate7 };

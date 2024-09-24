import React from "react";
import { useAnimate } from "framer-motion";

const Animate4 = () => {
  const [scope, animate] = useAnimate();

  const boxStyle = {
    width: "100px",
    height: "100px",
    background: "orange",
    borderRadius: "1rem",
  };

  const animationSequence = () => {
    animate([
      [scope.current, { rotate: 90 }],
      [scope.current, { scale: 0.5 }],
      [scope.current, { rotate: 360 }],
      [scope.current, { scale: 1 }],
    ]);
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
      <div style={boxStyle} ref={scope} onClick={animationSequence}></div>
    </div>
  );
};

export { Animate4 };

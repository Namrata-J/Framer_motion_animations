import React, { useState } from "react";
import {
  Animate1,
  Animate2,
  Animate3,
  Animate4,
  Animate5,
  Animate6,
  Animate7,
  Animate8,
  Animate9,
  Animate10,
  Animate11,
  Animate12,
  Animate13,
  Animate14,
} from "./components";
import "./styles.css";

export default function App() {
  const compArr = [
    {
      comp: <Animate1 />,
      heading:
        "Tween vs Spring vs Duration-based Spring vs Repeat vs Repeat-reverse with delay",
    },
    {
      comp: <Animate2 />,
      heading: "Hover vs Tap vs Drag",
    },
    {
      comp: <Animate3 />,
      heading: "Cycling through states",
    },
    {
      comp: <Animate4 />,
      heading: "Animation Sequence",
    },
    {
      comp: <Animate5 />,
      heading:
        "Drag with constaints vs Drag with direction lock Drag with transform vs Drag with 3D transform",
    },
    {
      comp: <Animate6 />,
      heading: "Scroll: Progress and Scroll: Refresh",
    },
    {
      comp: <Animate7 />,
      heading: "Svg Path Length",
    },
    {
      comp: <Animate8 />,
      heading: "Keyframes",
    },
    {
      comp: <Animate9 />,
      heading: "Colors: interpolation and keyframes",
    },
    {
      comp: <Animate10 />,
      heading: "Tracking the cursor",
    },
    {
      comp: <Animate11 />,
      heading: "Variants",
    },
    {
      comp: <Animate12 />,
      heading: "Cycle",
    },
    {
      comp: <Animate13 />,
      heading: "AnimatePresence",
    },
    {
      comp: <Animate14 />,
      heading: "Switch tabs",
    },
  ];
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2>Animations using framer motion</h2>
      <div className="animationsContainer">
        {counter !== 0 && (
          <button
            className="backArrow arrow"
            onClick={() => setCounter((counter) => counter - 1)}
          >
            ⬅️
          </button>
        )}
        <button
          className="forwardArrow arrow"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          ➡️
        </button>
        {compArr.map((comp, _i) =>
          _i === counter ? (
            <div className="compContainer">
              <h6 className="compHeading">{comp?.heading}</h6>
              {comp?.comp}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

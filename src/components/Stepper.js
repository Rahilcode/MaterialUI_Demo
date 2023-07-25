import React, { useState } from "react";
import ScrollCard from "./ScrollCard";

const Stepper = () => {
  const [steps, setSteps] = useState(0);

  const handleNext = () => {
    if (steps >= 4) {
      return;
    }

    setSteps(steps + 1);
  };
  const handlePrev = () => {
    if (steps <= 0) {
      return;
    }

    setSteps(steps - 1);
  };
  return (
    <div>
      <h1>Stepper</h1>
      <div className="steps">
        <div
          style={{ backgroundColor: steps >= 1 ? "green" : "gray" }}
          className={steps >= 1 && `green`}
        >
          1
        </div>
        <hr
          className="hrr1"
          style={{ backgroundColor: steps >= 2 ? "green" : "gray" }}
        />
        <div
          style={{ backgroundColor: steps >= 2 ? "green" : "gray" }}
          className={steps >= 2 && `green`}
        >
          2
        </div>
        <hr
          className="hrr2"
          style={{ backgroundColor: steps >= 3 ? "green" : "gray" }}
        />
        <div
          style={{ backgroundColor: steps >= 3 ? "green" : "gray" }}
          className={steps >= 3 && `green`}
        >
          3
        </div>
        <hr
          className="hrr3"
          style={{ backgroundColor: steps >= 4 ? "green" : "gray" }}
        />
        <div
          style={{ backgroundColor: steps >= 4 ? "green" : "gray" }}
          className={steps >= 4 && `green`}
        >
          4
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>

      <div className="lazy">
        <ScrollCard />
      </div>
    </div>
  );
};

export default Stepper;

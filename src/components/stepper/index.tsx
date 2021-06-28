import React from "react";
import { Link } from "react-router-dom";
import { Step, useCheckoutState } from "../../utils/checkoutState.original";
import { CapitalizeFirstLetter } from "../../utils/sanitize";
import classNames from "classnames";

import "./styles.css";

type StepElemetProps = {
  step: { name: string; order: number };
  isActive: boolean;
  isCompleted: boolean;
};

type StepLineProps = {
  isActive: boolean;
};

const steps: Step[] = ["authentication", "delivery", "payment", "confirmation"];

//ADDITIONAL COMPONENTS
const Line = ({ isActive }: StepLineProps) => (
  <span
    className={classNames("step-line", {
      "step-line-active": isActive,
    })}
  ></span>
);

const StepElement = ({ step, isActive, isCompleted }: StepElemetProps) => {
  return (
    <div className="step-container">
      <p
        className={classNames("step", {
          "step-active": isActive,
          "step-isCompleted": isCompleted,
        })}
      >
        <span
          className={classNames("step-inner", {
            "step-inner-active": isActive,
            "step-inner-isCompleted": isCompleted,
          })}
        ></span>
      </p>
      <label>
        <Link
          to={`/${step.name}`}
          className={classNames("step-label", {
            "step-label-active": isActive,
          })}
        >
          {CapitalizeFirstLetter(step.name)}
        </Link>
      </label>
    </div>
  );
};

//MAIN COMPONENT
const Stepper = () => {
  const { currentStep } = useCheckoutState();

  const currentStepNumber = steps.findIndex((step) => step === currentStep);

  return (
    <div className="stepper-container">
      {steps.map((step, i) =>
        i + 1 !== steps.length ? (
          <>
            <StepElement
              key={i}
              step={{ name: step, order: i }}
              isActive={currentStep === step}
              isCompleted={currentStepNumber > i}
            />
            <Line key={i} isActive={currentStepNumber > i} />
          </>
        ) : (
          <StepElement
            key={i}
            step={{ name: step, order: i }}
            isActive={currentStep === step}
            isCompleted={currentStepNumber > i}
          />
        )
      )}
    </div>
  );
};

export default Stepper;

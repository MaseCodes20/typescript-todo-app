import React from "react";

type CompleteButtonProps = {
  toggle: () => void;
  isComplete: boolean;
};

function CompleteButton({ toggle, isComplete }: CompleteButtonProps) {
  return (
    <button onClick={toggle}>{isComplete ? "complete" : "not complete"}</button>
  );
}

export default CompleteButton;

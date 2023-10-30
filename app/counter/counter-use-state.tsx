"use client";

import { useState, Dispatch, SetStateAction } from "react";

interface AddProps {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const AddOneButton = ({ counter, setCounter }: AddProps) => {
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Add One</button>
    </div>
  );
};

const CounterUseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <AddOneButton setCounter={setCounter} counter={counter} />
    </div>
  );
};

export default CounterUseState;

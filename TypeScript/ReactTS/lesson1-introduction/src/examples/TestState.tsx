import React, { useState } from "react";
import { v4 as uuid } from "uuid";

interface stateType {
  id: string;
  title: string;
  price: number;
}

const TestState = () => {
  const [state, setState] = useState<stateType[]>([
    {
      id: uuid(),
      title: "table",
      price: 50,
    },
    {
      id: uuid(),
      title: "sofa",
      price: 150,
    },
    {
      id: uuid(),
      title: "bed",
      price: 450,
    },
  ]);

  return (
    <ol>
      {state.map((item: any, i: number) => {
        return <li key={i}>{item.title}</li>;
      })}
      <button
        onClick={() => {
          setState([{
            id: uuid(),
            title: "bed2",
            price: 4502,
          }]);
        }}
      >
        add
      </button>
    </ol>
  );
};

export default TestState;

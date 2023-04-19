import React, { useState } from "react";
import { propType, stateType } from "../config";

const TestPropWithState: React.FC<propType> = ({ title,comingData }) => {
  const [state, setState] = useState<stateType[]>([
    {
      data: title,
    },
  ]);

  const changeData=():void=>{
    comingData(state[0].data)
  }
  

  return <>
  <button onClick={changeData}>change</button>
  </>;
};

export default TestPropWithState;

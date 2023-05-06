import React, { useMemo, useState } from "react";
import users from "../data/user";

const AppUseMemo = () => {
  const [count, setCount] = useState(0);
  const [userId,setUserId] = useState(null);
  const getUserRows = () => {
    console.log("getUserRows is running");

    return users.map((i) => <li onClick={()=>{setUserId(i.id)}} key={i.id}>{i.name}</li>);
  };


  const userRows = useMemo(()=>getUserRows(),[userId])
  

  return (
    <div>
        {userId}
      {userRows}

      <hr />

      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("count running");
        }}
      >
        +
      </button>
    </div>
  );
};

export default AppUseMemo;

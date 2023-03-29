import React from 'react'
import { createStore } from 'redux'


const initialState = {count:0};

const store = createStore((state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {count:state.count +1}
            case "DECREMENT":
            return {count:state.count -1}

                case "RESET":
            return {count:0}

            
    
        default:
            return state;
            
    }
});


store.subscribe(()=>{
    console.log(store.getState());
})









const Counter = () => {
  return (
    <div>Counter</div>
  )
}

export default Counter
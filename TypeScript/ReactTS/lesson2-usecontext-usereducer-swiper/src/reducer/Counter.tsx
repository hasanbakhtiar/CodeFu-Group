
import  { useReducer } from 'react'
import nature from '../img/unsplash.jpg';
interface CounterState {
    count:number
}
interface ResetType{
    type:"reset"
}
interface UpdateType  {
    type:'increment' | 'decrement',
    payload:number
}

type ActionType = UpdateType | ResetType;
const initialState = {count:0}

const CounterReducer =(state:CounterState,action:ActionType)=>{
    switch (action.type) {
        case "increment":
            return {count:state.count + action.payload}

            case "decrement":
              if (state.count > 0) {
                return {count:state.count - action.payload}
              }else{
                return initialState;
              }
            

            case "reset":
                return initialState
  
    
        default:
            return {count:state.count}
    }
}

const Counter = () => {
    const [state,dispatch] = useReducer(CounterReducer,initialState);
  return (
    <div>
        <img height={100} src={nature} alt="" />
        <button onClick={()=>{dispatch({type:'decrement',payload:1})}}>-1</button>
        <span style={{"margin":'0 10px'}}>{state.count}</span>
        <button onClick={()=>{dispatch({type:'increment',payload:1})}}>+1</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
    </div>
  )
}

export default Counter
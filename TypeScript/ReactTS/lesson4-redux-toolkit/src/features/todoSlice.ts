import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';


interface Todo{
    id:string,
    title:string
}


const initialState:Todo[] = [];

const todoSlice = createSlice({
    name:"Todos",
    initialState,
    reducers:{
        add:(state,action: PayloadAction<string>)=>{
             const newTodo = {id:uuid(), title: action.payload};
             state.push(newTodo);    
        }
    }
})

export default todoSlice.reducer;

export const {add} = todoSlice.actions;
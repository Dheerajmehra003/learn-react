import { createReducer } from "@reduxjs/toolkit";

const initialState ={
    c:0,
};

export const customReducer = createReducer(initialState,{
 
    Increment:(state) => {
        state.c += 1
    },
    IncrementByValue:(state,action) =>{
        state.c += 25;
        state.c += action.payload;
    },
    Decrement:(state) => {
        state.c -= 1
    },

});
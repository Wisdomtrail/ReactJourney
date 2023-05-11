import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    count: 0
}
const countSlice = createSlice({
    name: 'counter',
    initialState: initialValue,
    reducers: {
        increamentByOne: (state) => {
            state.count+=1
        },
        decreamentByOne: (state) => {
            state.count-=1;
        },
        increamentByValue: (state, action) => {
            state.count += action.payload;
        },
        decreamentByValue: (state, action) => {
            state.count-=action.payload;
        } 
    },
})
export const {increamentByOne,decreamentByOne,increamentByValue,decreamentByValue} = countSlice.actions;

export default countSlice.reducer
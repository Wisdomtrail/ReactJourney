import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   firstName: "",
   lastName: "",
   age: "",
   picture: "",
   phoneNumber: "",
   email: "",
}

const userDetailSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setPicture: (state, action) => {
            state.picture = action.payload;
        },
        setphoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { setFirstName, setLastName, setAge, setPicture, setEmail, setphoneNumber } = userDetailSlice.actions;

export default userDetailSlice.reducer;

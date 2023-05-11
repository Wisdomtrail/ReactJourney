import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFirstName, setLastName, setAge, setPicture, setEmail, setphoneNumber } from "../../../store/UserDetailSlice";
import UserCard from "./UseCard";

function UserDetailComponent() {
  const firstName = useSelector((state) => state.userDetails.firstName);
  const lastName = useSelector((state) => state.userDetails.lastName);
  const age = useSelector((state) => state.userDetails.age);
  const picture = useSelector((state)=> state.userDetails.picture);
  const email = useSelector((state) => state.userDetails.email);
  const phoneNumber = useSelector((state) => state.userDetails.phoneNumber);

  const dispatch = useDispatch();

  const handleFirstNameChange = (event) => {
    dispatch(setFirstName(event.target.value));
  };

  const handleLastNameChange = (event) => {
    dispatch(setLastName(event.target.value));
  };

  const handleAgeChange = (event) => {
    dispatch(setAge(event.target.value));
  };
  
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value))
  }
  const handlePhoneNumberChange =(event) => {
    dispatch(setphoneNumber(event.target.value))
  }
  const handlePictureChange = (event) => {
    const reader = new FileReader();
    reader.onload = function(event) {
      dispatch(setPicture(event.target.result));
    };
    reader.readAsDataURL(event.target.files[0]);
    
  };

  return (
    <div>
      <h1>Enter Your Details</h1>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={age} onChange={handleAgeChange} />
      </label>
      <br />
      <br />
      <label >
        Enter Email:
        <input type="text" onChange={handleEmailChange} />
      </label>
      <label>
        Enter PhoneNumber:
        <input type="text" onChange={handlePhoneNumberChange} />
      </label>
      <label>
        Upload Image:
      <input type="file" onChange={handlePictureChange} />
      </label>
      <center><UserCard firstName={firstName} lastName={lastName} age={age} picture={picture} email={email} phoneNumber={phoneNumber} /></center>
      
    </div>
  );
}

export default UserDetailComponent;

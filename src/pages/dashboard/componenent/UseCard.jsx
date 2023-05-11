import React from "react";
import '../styles/UseCard.css'
function UserCard({ firstName, lastName, age, picture, email, phoneNumber}) {
  return (
    <div className="container">
      <h2>ID Card</h2>
      <img className="image" src={picture} alt="User Avatar" style={{ maxWidth: "100%", height: "7cm" }} />
      <div className="name">
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      </div>
      <div>
      <p>PhoneNumber: {phoneNumber}</p>
      <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default UserCard;

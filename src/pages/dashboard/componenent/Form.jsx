import React from "react";
import "../styles/Form.css";

 
function Form() {
  return (
    <div>
      <center>
        <div className="maincontainer">
           
          <div className="TopNav">
            <h1 className="Awards">AWARDS</h1>
            <div className="B">
               <a className="a" href="">ABOUT US</a>
               <a className="c" href="">CONTACT</a>
               <a className="o" href="">OUR COMPETITION</a>
               <a className="s" href="">SIGN IN /SIGN UP</a>
            </div> 
          </div>
          <center>
          <div className="body">
                <div className="form"><br />
                    <h3>Fill the Application</h3>
                    <br />
                    <input type="fullname" placeholder="fullname"/><br />
                    <input type="" placeholder="enter email address"/><br />
                    <input type="number" placeholder="PhoneNumber" /><br />
                    <input type="" placeholder="Street Adress" /><br />
                    <select  id="city" name="city">
                    <option value="New York City">City</option>
                    <option value="New York City">New York City</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                    <option value="Philadelphia">Philadelphia</option>
                    </select>
                    <select name="" id="state">
                        <option value="State">State</option>
                        <option value="">ABIA</option>
                        <option value="">Adamawa</option>
                        <option value="">Lagos</option>
                        <option value="">Akwa Ibom</option>
                    </select><br />

                    <select name="" id="country">
                    <option value="country">Country</option>
                        <option value="">Angola</option>
                        <option value="">Nigeria</option>
                        <option value="">Cameroon</option>
                        <option value="">Portugal</option>
                    </select>

                    <input id="zip" type="" placeholder="Zip code"/>
                </div>
                    
                <div className="upload">
                    <p id="pl"> <span> Upload your photo </span><span className="pi">?</span></p>
                    <input id="pic" type="file" />
                    <br />
                    <select name="" id="photo">
                    <option value="country">Photo Content Category</option>
                        <option value="">Jpeg</option>
                        <option value="">PNG</option>
                        <option value="">JPG</option>
                    </select>
                    <br />
                    <p id="p">Payment Option</p>
                    <input id="card" type="" placeholder="Name On card*"/><br />
                    <input type="" id="card" placeholder="Credit Card" /><br />
                    <a id="condition" href="">Terms and conditions</a><br />
                    <div className="checkBox">
                    <input type="checkbox" /> I Agree
                    </div>
                    <button id="submit">Submit</button>
                    <button id="cancel">Cancel</button>
                </div>

          </div>
          </center> 
        </div>
      </center>
    </div>
  );
}

export default Form;

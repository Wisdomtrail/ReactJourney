import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/menstration.css";
import padImage from "../assets/images/pad.png";

function Menstration() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.play();
  };

  return (
    <div className="cont">
      <div className="mainContainer">
        <div className="top">
          <div className="name">
            <span className="spot">SPOT</span> <span className="on">ON</span>
          </div>
          <Link className="D" to="/trackPeriod">TRACK PERIOD</Link>
          <Link className="P" to="/pregnancyTest">PREGNANCY TEST</Link>
          <Link className="A" to="/AboutUs">ABOUT US</Link>
          <Link className="R" to="/rateUs">RATE US</Link>
          <a className="T" href="#contactContainer">CONTACT US</a>
        </div>
        
        <center>
          <div className="videoContainer">
            <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            height={500}
            onEnded={handleVideoEnd}>
            <source src={require("../assets/videos/myVideo.mp4")} type="video/mp4"/>
            </video>
            <div className="textContainer">
              <img className="pad" src={padImage} alt="Pad Image" />
              <p>2 pads used</p>
            </div>
          </div>
        </center>
      </div>
      <div id="contactContainer" className="contactContainer">
        <a className="G" href="https://mail.google.com">
          <img
          src={require("../assets/images/gmailLogo.png")}
          alt="Gmail Logo"/>
          </a>
          <a className="H" href="https://github.com/sunepa01">
            <img
            src={require("../assets/images/githubLogo.png")}
            alt="Github Logo"/>
           </a>
           <a className="F" href="https://www.facebook.com">
             <img
               src={require("../assets/images/facebookLogo.png")}
               alt="Facebook Logo"/>
           </a>
           <a className="W" href="https://web.whatsapp.com">
             <img
               src={require("../assets/images/whatsappLogo.png")}
               alt="WhatsApp Logo"
             />
           </a>
           <a className="t" href="https://twitter.com/SundayE87808701">
             <img
               src={require("../assets/images/twitterLogo.jpg")}
               alt="Twitter Logo"
             /> 
           </a>
           <a className="t" href="https://www.linkedin.com/in/sunday-emmanuel-29a92b253/">
             <img
               src={require("../assets/images/linkedin.jpeg")}
               alt="Twitter Logo"
             /> 
           </a>
          
      </div>
  </div>
  );
}

export default Menstration;

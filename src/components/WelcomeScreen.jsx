import React from "react";
import { Link } from "react-router-dom";
import "./src/styles.css";


function WelcomeScreen(props) {
  const { welcomeh1, you_Accept_Our_Text, termsofservicetext, getstartedbutton } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcomescreenscreen">
        <img className="welcome-h1animate-enter3" src={welcomeh1} />
        <img className="youacceptour-textanimate-enter2" src={you_Accept_Our_Text} />
        <div className="termsof-service-fieldanimate-enter1">
          <div className="terms-of-service-text">{termsofservicetext}</div>
        </div>
        <img className="get-started-buttonsmart-layers-pointersanimate-enter" src={getstartedbutton} />
      </div>
    </div>
  );
}


export default WelcomeScreen;
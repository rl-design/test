/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const NavigationB = ({ className }) => {
  return (
    <div className={`navigation-b ${className}`}>
      <img
        className="web-logo"
        alt="Web logo"
        src="https://generation-sessions.s3.amazonaws.com/9325f1f9e218d1b46ebb0a8cec6748a9/img/web-logo-1-2@2x.png"
      />
      <div className="frame">
        <div className="text-wrapper">Lesson plans</div>
        <div className="text-wrapper">Resources</div>
        <div className="text-wrapper">Student showcases</div>
      </div>
      <Button className="button-instance" text="Register for workshops" />
    </div>
  );
};

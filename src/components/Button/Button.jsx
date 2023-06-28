/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ className, registerForClassName, text = "Register for workshops" }) => {
  return (
    <div className={`button ${className}`}>
      <div className={`register-for ${registerForClassName}`}>{text}</div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

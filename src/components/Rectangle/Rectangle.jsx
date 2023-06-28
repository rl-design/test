/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Rectangle = ({
  className,
  rectangle = "https://generation-sessions.s3.amazonaws.com/9325f1f9e218d1b46ebb0a8cec6748a9/img/rectangle.svg",
}) => {
  return <img className={`rectangle ${className}`} alt="Rectangle" src={rectangle} />;
};

Rectangle.propTypes = {
  rectangle: PropTypes.string,
};

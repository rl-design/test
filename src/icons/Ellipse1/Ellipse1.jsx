/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Ellipse1 = ({ className }) => {
  return (
    <svg
      className={`ellipse-1 ${className}`}
      fill="none"
      height="200"
      viewBox="0 0 200 200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M200 100C200 127.614 188.807 152.614 170.711 170.711C152.614 188.807 127.614 200 100 200C72.3858 200 47.3858 188.807 29.2893 170.711C11.1929 152.614 1.71143e-06 127.614 1.71143e-06 100C1.71143e-06 72.3857 11.1929 47.3857 29.2893 29.2893C47.3858 11.1928 72.3858 -3.11903e-05 100 -3.11903e-05C127.614 -3.11903e-05 152.614 11.1928 170.711 29.2893C188.807 47.3857 200 72.3857 200 100Z"
        fill="#E5E5E5"
      />
      <path
        className="path"
        d="M99.2929 100L29.2902 170.003C11.4911 152.025 0.500002 127.296 0.500002 100C0.500002 72.7035 11.4911 47.9751 29.2902 29.9973L99.2929 100ZM170.71 170.003L100.707 100L170.71 29.9973C188.509 47.9751 199.5 72.7035 199.5 100C199.5 127.296 188.509 152.025 170.71 170.003ZM170.003 29.2902L100 99.2929L29.9973 29.2902C47.9751 11.491 72.7035 0.499969 100 0.499969C127.296 0.499969 152.025 11.491 170.003 29.2902ZM100 100.707L170.003 170.71C152.025 188.509 127.296 199.5 100 199.5C72.7035 199.5 47.9751 188.509 29.9973 170.71L100 100.707Z"
        stroke="black"
        strokeOpacity="0.3"
      />
    </svg>
  );
};
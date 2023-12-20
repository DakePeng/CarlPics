/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./ImageSets.css";

export const ImageSets = ({ className }) => {
  return (
    <a className={`image-sets ${className}`} href="" rel="noopener noreferrer" target="_blank">
      <div className="set">
        <img className="pic" alt="Pic" />
        <div className="text-wrapper">Women's Soccer, 78'-82'</div>
      </div>
    </a>
  );
};


import React from "react";
import { Close } from "../close/index";
import { ShopNow } from "../shop-now/index";
import { Frame } from "../frame/index";

import "./index.css";

export const Alert = () => {
  return (
    <div className="alert">
      <div className="overlap-group">
          <div className="ellipse" />
          <div className="ellipse2" />
        </div>
      <div className="overlap">
        <img className="display" alt="Display" src="display21-1.png" />
        <Frame />
        <div className="shop-and-close">
          <ShopNow />
          <div className="mobile" />
          <Close className="close-instance" union="close.svg" />
        </div>
      </div>
    </div>
  );
};

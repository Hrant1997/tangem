import PropTypes from "prop-types";
import React from "react";
import "./index.css";

export const Close = ({ union = "close.svg", onClick=() => {} }) => {
  return (
    <div className="close" onClick={onClick}>
      <img className="union" alt="Union" src={union} />
    </div>
  );
};

Close.propTypes = {
  union: PropTypes.string,
};


import React, { useState } from "react";

import "./index.css";
import { Close } from "../close";
import clsx from "clsx";

export const Card = ({ isHeaderVisible }) => {
	const [isClosed, setIsClosed] = useState(localStorage.getItem('is_banner_closed'))

	if (isClosed) return null

	const handleClose = () => {
		localStorage.setItem('is_banner_closed', 1)
		setIsClosed(true)
	}

  return (
    <div className={clsx("card", { 'header-hidden': !isHeaderVisible })}>
        <Close onClick={handleClose} />
    </div>
  );
};

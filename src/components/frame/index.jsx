
import React from "react";
import "./index.css";

export const Frame = () => {
    return (
    <div className="frame">
        <div className="block">
            <p className="title">
                <span className="text-weight-600">Black Friday,</span>
                <span> 24-27 Nov</span>
            </p>
        </div>
        <img src="vector.svg" className="vector" alt="vector"/>

        <div className="block-2">
            <div className="text-yellow-bolt">10%OFF</div>
        </div>
        <img src="vector.svg" className="vector" alt="vector" />

        <div className="block-2">
            <p className="p">
                <span className="span">Use code </span>
                <span className="text-yellow-bolt">10FRIDAY</span>
                <span className="span"> at checkout</span>
            </p>
        </div>
    </div>
)
}

import React from "react";
import btn from "./Button.module.css";

const Button = ({ type, size, value, action }) => {
    return (
        <button className={`${btn.common} ${btn[type]} ${btn[size ? size : "base"]}`} onClick={action}>
            {value}
        </button>
    );
};

export default Button;

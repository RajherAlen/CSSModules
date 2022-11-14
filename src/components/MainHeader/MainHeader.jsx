import React from "react";
import header from "./Header.module.css";

const MainHeader = ({ children }) => {
    return <div className={header.wrapper}>{children}</div>;
};

export default MainHeader;

import React from "react";
import content from "./Content.module.css";

const MainContent = ({ children }) => {
    return <div className={content.main}>{children}</div>;
};

export default MainContent;

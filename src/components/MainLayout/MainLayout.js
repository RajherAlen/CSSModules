import React from "react";
import layout from "./Layout.module.css";

const MainLayout = ({ children }) => {
    return <div className={layout.main}>{children}</div>;
};

export default MainLayout;

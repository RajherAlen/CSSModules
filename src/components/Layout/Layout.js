import React from "react";
import lyt from "./Layout.module.css";

const Layout = ({ size, children }) => {
    return (
        <div className={`${lyt.layout} ${lyt[`grid-${size}`]}`}>{children}</div>
    );
};

export default Layout;

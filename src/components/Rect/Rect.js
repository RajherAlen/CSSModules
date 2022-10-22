import React from "react";
import rct from "./Rect.module.css";

const Rect = ({ value, toggle, margin, color }) => {
    return (
        <div className={`${rct.rect} ${rct[color]} ${rct[toggle]} ${margin}`}>
            {value}
        </div>
    );
};

export default Rect;

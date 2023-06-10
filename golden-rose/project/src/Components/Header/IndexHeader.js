import React from "react";
// COMPONENTS
import PrimHeader from "./PrimHeader";
// STYLE
import Style from "./Header.module.css";

const IndexHeader = () => {
    return (
        <div className={Style.container}>
            <PrimHeader />
        </div>
    );
};

export default IndexHeader;
import React from 'react';
// STYLE
import Style from "./Customers.module.css";
// IMG
import Rose from "../../Images/BGRose.svg";

const Customers = () => {
    return (
        <div className={Style.container}>
            I'm Customers.
            <img src={Rose} alt="Rose" className={Style.bgRose} />
        </div>
    );
};

export default Customers;
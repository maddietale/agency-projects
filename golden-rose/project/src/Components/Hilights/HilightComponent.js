import React from 'react';
// STYLE
import Style from "./Hilights.module.css";

const HilightComponent = (props) => {
    return (
        <div className={Style.hilight}>
            <div className={Style.hilightImage}>
                <img src={props.url} alt='hilight' />
            </div>
            <div className={Style.hilightText}>
                <h4>{props.hilightTitle}</h4>
                <span>{props.hilightDescription}</span>
            </div>
        </div>
    );
};

export default HilightComponent;
import React, { useState } from "react";
// STYLE
import Style from "./Products.module.css";
import { CustomLink, FlexWrapper } from "../StyledComponent";
// IMG
import Basket from "../../Images/Products/Basket.svg";

const ProductComponent = (props) => {

    // STATES
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={Style.product} style={{ backgroundImage: `url(${props.productImg})` }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {isHover ? (<FlexWrapper justifyContent={"space-around"} className={Style.productHover}>
                <div>
                    <p>{props.productName}</p>
                    <span>{props.productPrice}  تومان</span>
                </div>
                <div>
                    <CustomLink image>
                        <img src={Basket} alt="Shop" />
                    </CustomLink>
                </div>
            </FlexWrapper>) : ("")}
        </div>
    );
};

export default ProductComponent;
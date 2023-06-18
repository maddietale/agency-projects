import React from 'react';
import { FlexWrapper } from '../StyledComponent';
import Style from "./Products.module.css";

const Products = () => {
    return (
        <FlexWrapper justifyContent={"center"} className={Style.container}>
            hi, im products
        </FlexWrapper>
    );
};

export default Products;
import React from "react";
// COMPONENTS
import ProductComponent from "./ProductComponent";
// STYLE
import Style from "./Products.module.css";
import { CustomLink, FlexWrapper } from "../StyledComponent";
// IMG
import Sparkle from "../../Images/Products/Sparkle.svg";
import Arrow from "../../Images/Products/Arrow.svg";
import Rose from "../../Images/BGRose.svg";
import Item_1 from "../../Images/Products/Item_4.svg";
import Item_2 from "../../Images/Products/Item_3.svg";
import Item_3 from "../../Images/Products/Item_2.svg";
import Item_4 from "../../Images/Products/Item_1.svg";

const Products = () => {
    return (
        <div className={Style.container}>
            <FlexWrapper justifyContent={"space-between"} className={Style.productsTitle}>
                <FlexWrapper gapSize={"8px"}>
                    <img src={Sparkle} alt="Best Products" />
                    <h1>محبوب‌ترین محصولات آماده برای فروش</h1>
                </FlexWrapper>
                <FlexWrapper gapSize={"8px"}>
                    <h5>مشاهده همه محصولات</h5>
                    <CustomLink>
                        <img src={Arrow} alt="All Products" />
                    </CustomLink>
                </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper gapSize={"16px"} justifyContent={"center"} className={Style.productsContainer}>
                <ProductComponent productImg={Item_1} productName={"رز جاودان مدل رز جادویی"} productPrice={"7.500.500"} />
                <ProductComponent productImg={Item_2} productName={"رز جاودان مدل رز جادویی"} productPrice={"7.500.500"} />
                <ProductComponent productImg={Item_3} productName={"رز جاودان مدل رز جادویی"} productPrice={"7.500.500"} />
                <ProductComponent productImg={Item_4} productName={"رز جاودان مدل رز جادویی"} productPrice={"7.500.500"} />
            </FlexWrapper>
            <img src={Rose} alt="Rose" className={Style.bgRose} />
        </div>
    );
};

export default Products;
import React from "react";
// COMPONENTS
import CommentComponent from "./CommentComponent";
// STYLE
import Style from "./Comments.module.css";
import { FlexWrapper } from "../StyledComponent";
// IMG
import Rose from "../../Images/BGRose.svg";
import rightArrow from "../../Images/Comments/rightArrow.svg";
import leftArrow from "../../Images/Comments/leftArrow.svg";

const Comments = () => {
    return (
        <div className={Style.container}>
            <img src={Rose} alt="Rose" className={Style.bgRose} />
            <h1 className={Style.blah}>مشتریان ما درباره رز طلایی چه می‌گویند ؟</h1>
            <FlexWrapper justifyContent={"center"} className={Style.commentsBox}>
                <CommentComponent />
                <CommentComponent />
            </FlexWrapper>
            <FlexWrapper justifyContent={"space-between"} className={Style.commentsArrow}>
                <img src={rightArrow} alt="next"/>
                <img src={leftArrow} alt="next"/>
            </FlexWrapper>
        </div>
    );
};

export default Comments;
import React, { useState } from "react";
// COMPONENTS
import CommentComponent from "./CommentComponent";
import { commentItems } from "../../data";
// STYLE
import Style from "./Comments.module.css";
import { FlexWrapper } from "../StyledComponent";
// IMG
import Rose from "../../Images/BGRose.svg";
import rightArrow from "../../Images/Comments/rightArrow.svg";
import leftArrow from "../../Images/Comments/leftArrow.svg";

const Comments = () => {
    // STATES
    const [move, setMove] = useState(0);
    // FUNC
    const clickHandler = (direction) => {
        if (direction === "left")
            setMove(move - 150);
        else
            setMove(move + 150);
    };

    return (
        <div className={Style.container}>
            <img src={Rose} alt="Rose" className={Style.bgRose} />
            <h1>مشتریان ما درباره رز طلایی چه می‌گویند ؟</h1>
            <div className={Style.commentsBox}>
                <FlexWrapper className={Style.wrapper} justifyContent={"center"} style={{ transform: `translateX(${move}px)` }}>
                    {commentItems.map((item) => (
                        <CommentComponent key={item.id} cmUsername={item.username} cmTitle={item.title} cmDesc={item.desc} />
                    ))}
                </FlexWrapper>
            </div>
            <FlexWrapper justifyContent={"space-between"} className={Style.commentsArrow}>
                <img src={rightArrow} alt="next" onClick={() => clickHandler("right")} />
                <img src={leftArrow} alt="next" onClick={() => clickHandler("left")} />
            </FlexWrapper>
        </div>
    );
};

export default Comments;
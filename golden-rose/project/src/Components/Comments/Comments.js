import React, { useState } from "react";
// COMPONENTS
import CommentComponent from "./CommentComponent";
import { commentItems } from "../../data";
// STYLE
import Style from "./Comments.module.css";
import { FlexWrapper, GoldenTitle1 } from "../StyledComponent";
// IMG
import Rose from "../../Images/BGRose.svg";
import rightArrow from "../../Images/Comments/rightArrow.svg";
import leftArrow from "../../Images/Comments/leftArrow.svg";
import user from "../../Images/Comments/user.svg";

const Comments = () => {
    // STATES
    const [index, setIndex] = useState(0);
    const [leftDisable, setLeftDisable] = useState(false);
    const [rightDisable, setRightDisable] = useState(false);
    // FUNC
    const clickHandler = (direction) => {
        if (direction === "left") {
            if (index !== commentItems.length - 3) {
                setIndex(index + 1);
                console.log("1" + index);
                setRightDisable(false);
            }
            else {
                setLeftDisable(true);
            }
        }
        else {
            if (index !== 0) {
                setIndex(index - 1);
                console.log(index);
                setLeftDisable(false);
            }
            else {
                setRightDisable(true);
            }
        }
    };

    return (
        <div className={Style.container}>
            <img src={Rose} alt="Rose" className={Style.bgRose} />
            <h1>مشتریان ما درباره <GoldenTitle1 /> چه می‌گویند ؟</h1>
            <div className={Style.commentsBox}>
                <CommentComponent key={commentItems[index].id} cmUsername={commentItems[index].username} cmTitle={commentItems[index].title} cmDesc={commentItems[index].desc} cmUser={user} />
                <CommentComponent key={commentItems[index + 1].id} cmUsername={commentItems[index + 1].username} cmTitle={commentItems[index + 1].title} cmDesc={commentItems[index + 1].desc} cmUser={user} />
                <CommentComponent key={commentItems[index + 2].id} cmUsername={commentItems[index + 2].username} cmTitle={commentItems[index + 2].title} cmDesc={commentItems[index + 2].desc} cmUser={user} />
            </div>
            <FlexWrapper justifyContent={"space-between"} className={Style.commentsArrow}>
                {rightDisable ? (<img src={rightArrow} alt="next" style={{ opacity: "0.4" }} />) : (<img src={rightArrow} alt="next" onClick={() => clickHandler("right")} />)}
                {leftDisable ? (<img src={leftArrow} alt="next" style={{ opacity: "0.4" }} />) : (<img src={leftArrow} alt="next" onClick={() => clickHandler("left")} />)}
            </FlexWrapper>
        </div>
    );
};

export default Comments;
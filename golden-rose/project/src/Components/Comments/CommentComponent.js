import React from "react";
// STYLE
import Style from "./Comments.module.css";
import { CustomLink, FlexWrapper } from "../StyledComponent";

const CommentComponent = (props) => {
    return (
        <div className={Style.commentContainer}>
            <FlexWrapper className={Style.commentInfo}>
                <CustomLink image>
                    <img src={props.cmUser} alt="user" />
                </CustomLink>
                <div className={Style.commentTitle}>
                    <h5>{props.cmUsername}</h5>
                    <h6>{props.cmTitle}</h6>
                </div>
            </FlexWrapper>
            <div className={Style.commentDesc}>
                <span>{props.cmDesc}</span>
            </div>
        </div>
    );
};

export default CommentComponent;
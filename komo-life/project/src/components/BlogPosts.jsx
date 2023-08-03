import Widget from "./Widget";
// IMG
import P10 from "../images/products/10.svg";
import P11 from "../images/products/11.svg";
import P12 from "../images/products/12.svg";
import P13 from "../images/products/13.svg";
import Blog from "../images/info/BlogIcon.svg";
import Icon from "../images/info/Arrow.svg";
// STYLE
import styled from "styled-components";
// GRID
const Wrapper = styled.div`
  display: grid;
  grid-row-end: 56px 408px;
  grid-template-columns: 1120px;
  height: 544px;
  margin: 56px 0 0 0;
  justify-content: center;
  align-items: flex-end;
`;
// Title
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  overflow: scroll;
`;
const Left = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  overflow: scroll;
`;
const Text = styled.span`
  font-size: 1rem;
  overflow: scroll;
`;
const Arrow = styled.img`
  cursor: pointer;
`;
// BOX
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  align-items: center;
`;

const BlogPosts = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Blog} alt="blog"/>
          <Title>مطالب وبلاگ کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده مطالب بیشتر</Text>
          <Arrow src={Icon} alt="arrow"/>
        </Left>
      </Info>
      <Container>
        <Widget url={P11} title={"آیین گشایش شعبه جدید کومولایف: کومولایف سانا"} isBlog={true} />
        <Widget url={P10} title={"درباره زمان ارسال سفارشات در روزهای پایانی سال"} isBlog={true} />
        <Widget url={P13} title={"سری Komono NEXT: جدیدترین تجربه جسورانه کومونو"} isBlog={true} />
        <Widget url={P12} title={"هشت سالگی کومولایف در کنار شما"} isBlog={true} />
      </Container>
    </Wrapper>
  );
};

export default BlogPosts;

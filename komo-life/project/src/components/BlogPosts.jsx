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
  grid-template-columns: 1120px;
  height: 568px;
  justify-content: center;
  align-items: flex-end;
`;
// BOX
const Container = styled.div`
  width: 100%;
  height: 408px;
  display: flex;
  overflow: scroll;
  align-items: center;
`;
const Info = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  width: 269px;
  height: 56px;
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Left = styled.div`
  width: 156px;
  height: 32px;
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

const BlogPosts = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Blog} />
          <Title>مطالب وبلاگ کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده مطالب بیشتر</Text>
          <Arrow src={Icon} />
        </Left>
      </Info>
      <Container>
        <Widget url={P10} title={"مطلب اول"} isBlog={true} />
        <Widget url={P11} title={"مطلب دوم"} isBlog={true} />
        <Widget url={P12} title={"مطلب سوم"} isBlog={true} />
        <Widget url={P13} title={"مطلب چهارم"} isBlog={true} />
      </Container>
    </Wrapper>
  );
};

export default BlogPosts;

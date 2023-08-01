import Widget from "./Widget";
// IMG
import P5 from "../images/products/5.svg";
import Bags from "../images/info/BagsIcon.svg";
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
  width: 398px;
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

const PopularBags = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Bags} />
          <Title>محبوب‌ترین کوله‌پشتی‌های کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده کوله‌پشتی‌های بیشتر</Text>
          <Arrow src={Icon} />
        </Left>
      </Info>
      <Container>
        <Widget url={P5} title={"کیف اول"} isBlog={false} price={"۲.۹۰۰.۰۰۰"} />
        <Widget url={P5} title={"کیف دوم"} isBlog={false} price={"۲.۹۰۰.۰۰۰"} />
        <Widget url={P5} title={"کیف سوم"} isBlog={false} price={"۲.۹۰۰.۰۰۰"} />
        <Widget
          url={P5}
          title={"کیف چهارم"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
      </Container>
    </Wrapper>
  );
};

export default PopularBags;

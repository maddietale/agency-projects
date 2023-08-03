// IMAGE
import Arrow from "../images/widget/Arrow.svg";
// STYLE
import styled from "styled-components";
// BOX
const Container = styled.div`
  min-width: 280px;
  min-height: 408px;
  border: 1.5px solid var(--black-one);
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
`;
const Image = styled.img`
  width: 248px;
  height: 256px;
  object-fit: cover;
  border: 1.5px solid var(--black-one);
`;
const Title = styled.span`
  font-size: 1.5rem;
  max-width: 250px;
  max-height: 55px;
  text-align: center;
  overflow: scroll;
  display: block;
`;
const Price = styled.span`
  font-size: 1rem;
  text-align: center;
`;
const Button = styled.button`
  width: 128px;
  height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--main-black);
  background-color: var(--main-white);
  border: 1px solid var(--main-black);
  font-size: 1rem;
  font-family: "On-Semi";
  &:hover {
    background-color: var(--black-four);
  }
`;

const Widget = (props) => {
  return (
    <Container>
      <Image src={props.url} alt="product" />
      <Title>{props.title}</Title>
      {props.isBlog ? "" : <Price>{props.price} تومان</Price>}
      {props.isBlog ? (
        <Button>
          مطالعه مطلب
          <img src={Arrow} alt="arrow" />
        </Button>
      ) : (
        <Button>
          جزئیات بیشتر
          <img src={Arrow} alt="arrow" />
        </Button>
      )}
    </Container>
  );
};

export default Widget;

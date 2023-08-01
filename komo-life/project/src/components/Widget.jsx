// IMAGE
import Arrow from "../images/widget/Arrow.svg";
// STYLE
import styled from "styled-components";

const Container = styled.div`
  min-width: 280px;
  height: 408px;
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
  &:hover {
    background-color: var(--black-four);
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const Price = styled.span`
  font-size: 1rem;
`;

const Widget = (props) => {
  return (
    <Container>
      <Image src={props.url} />
      <Title>{props.title}</Title>
      {props.isBlog ? "" : <Price>{props.price} تومان</Price>}
      {props.isBlog ? (
        <Button>
          مطالعه مطلب
          <img src={Arrow} />
        </Button>
      ) : (
        <Button>
          جزئیات بیشتر
          <img src={Arrow} />
        </Button>
      )}
    </Container>
  );
};

export default Widget;

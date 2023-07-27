import Widget from "./Widget";
// STYLE
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  border: solid 1px black;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const PopularProducts = () => {
  return (
    <Container>
      <Widget />
      <Widget />
    </Container>
  );
};

export default PopularProducts;

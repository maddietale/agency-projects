// STYLE
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  border: solid 1px black;
`;

const Slider = () => {
    return (
        <Container>
            hi, im slider.
        </Container>
    );
};

export default Slider;
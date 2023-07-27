import { useState, useEffect } from "react";
// STYLE
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 408px;
  border: 1.5px solid var(--black-one);
`;

const Widget = (props) => {
  // STATE
  const [isBlog, setIsBlog] = useState(false);

  return (
    <Container>
      <img src={props.url} />
      <h1>{props.title}</h1>
      {isBlog ? "" : <span>hey</span>}
      {isBlog ? <button>مطالعه مطلب</button> : <button>جزئیات بیشتر</button>}
    </Container>
  );
};

export default Widget;

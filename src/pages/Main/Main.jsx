import React from "react";
import styled from "styled-components";
import Products from "../../components/Products/Products";
import SidePannel from "../../components/SidePannel/SidePannel";

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;

  background-color: lightblue;
`;

export default function Main() {
  return (
    <StyledMain>
      <SidePannel />
      <Products />
    </StyledMain>
  );
}

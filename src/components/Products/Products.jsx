import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { db, getCategoryes } from "../../firebase.js";

const StyledProducts = styled.div``;

export default function Products() {
  const [list, setList] = useState();

  useEffect(() => {
    setList(getCategoryes(db));
  }, []);

  return (
    <StyledProducts>
      Products
      {console.log(list)}
    </StyledProducts>
  );
}

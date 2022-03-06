import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSidePannel = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: fit-content;

  background-color: lightcyan;
`;

export default function SidePannel() {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    try {
      await fetch("/mock/state.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCategories(data.list.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <StyledSidePannel>
      {categories
        ? categories.map((el, index) => (
            <button category={el.manufacturers} key={index}>
              {el.name}
            </button>
          ))
        : ""}
    </StyledSidePannel>
  );
}

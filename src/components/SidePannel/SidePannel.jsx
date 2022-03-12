import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCollection } from "../../firebase.js";

const StyledSidePannel = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: fit-content;

  background-color: lightcyan;
`;

export default function SidePannel() {
  const [categories, setCategoryes] = useState();

  const getCategories = async () => {
    try {
      await getCollection().then((data) => {
        let newList = [];

        data.forEach((el) => {
          newList.push(el);
        });

        setCategoryes(newList);
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
            <button category={el.index} key={index}>
              {el.id}
            </button>
          ))
        : ""}
    </StyledSidePannel>
  );
}

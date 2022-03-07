import { async } from "@firebase/util";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getCategories } from "../../firebase.js";

const StyledProducts = styled.div``;

export default function Products() {
  const [list, setList] = useState();

  const getProducts = async () => {
    try {
      await getCategories()
      .then((data) => {
        let newList = [];

        data.forEach(el => {
          newList.push(el.id);
        });

        setList(newList);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledProducts>
      Products
      {list
        ? list.map((el, index) => (
            <button key={index}>
              {el}
            </button>
          ))
        : ""}
    </StyledProducts>
  );
}

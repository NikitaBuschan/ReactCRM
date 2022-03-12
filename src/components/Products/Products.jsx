import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCollection } from "../../firebase.js";

const StyledProducts = styled.div``;

export default function Products() {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    try {
      await getCollection("categories").then((data) => {
        let newList = [];

        data.forEach((el) => {
          newList.push(el.id);
        });

        setProducts(newList);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledProducts>
      Products
      {/* <ul>{list ? list.map((el, index) => <li key={index}>{el}</li>) : ""}</ul> */}
    </StyledProducts>
  );
}

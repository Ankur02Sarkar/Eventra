import styled from "styled-components";
import { itemData } from "../data/itemData";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({type}) => {
  return (
    <Container>
      {itemData.map((item) =>
        item.type === type ? <Product item={item} key={item.id} /> : null
      )}
    </Container>
  );
};

export default Products;

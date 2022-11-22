import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  const location = useLocation();
  console.log(location);
  const cat = location.pathname.split("/")[2];
  console.log(cat);
  return (
    <Container>
      <Announcement />
      <Title>Dresses</Title>
      <Products cat={cat} />
      <Footer />
    </Container>
  );
};

export default ProductList;

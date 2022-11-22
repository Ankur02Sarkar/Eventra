import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Aniversary = () => {
  return (
    <Container>
      <Announcement />
      <Title>Aniversary</Title>
      <Products type={"aniversary"} />
      <Footer />
    </Container>
  );
};

export default Aniversary;

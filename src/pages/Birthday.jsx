import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Birthday = () => {
  return (
    <Container>
      <Announcement />
      <Title>Birthday</Title>
      <Products type={"birthday"} />
      <Footer />
    </Container>
  );
};

export default Birthday;

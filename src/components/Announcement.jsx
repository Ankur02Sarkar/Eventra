import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Diwali Dhamaka Offer!! Free Shipping on Orders above ₹499
    </Container>
  );
};

export default Announcement;

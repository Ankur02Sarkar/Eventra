import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
// import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import Jean from "../assets/jean.jpg";
import { formatCurrency } from "../formatCurrency";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Product = () => {
  let cost = 23;
  const quantity = 0;
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={Jean} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price> {formatCurrency(cost)} </Price>
          <AddContainer>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button className="w-100">Add To Cart</Button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: "0.5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: "0.5rem" }}
                  >
                    <Button>-</Button>
                    <span className="fs-3">{quantity}</span>
                    <Button>+</Button>
                  </div>
                  <Button variant="danger" size="sm">
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default Product;

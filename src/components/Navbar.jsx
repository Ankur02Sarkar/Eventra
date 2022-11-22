import React from "react";
// import { useRef } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useShoppingCart } from "../context/Cart";

// import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
const Container = styled.div`
  /* height: 60px;
  ${mobile({ height: "50px" })} */
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* ${mobile({ padding: "10px 0px" })} */
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  margin-left: 20px;
  font-weight: 700;
  font-size: 32px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* ${mobile({ flex: 2, justifyContent: "center" })} */
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };
  return (
    <Container>
      <Wrapper>
        <Left>
          <img
            src="https://i.ibb.co/LkdYTBC/eventra-modified.png"
            style={{ width: "47px", height: "47px" }}
            alt=""
          />
          <Link to="/">
            <Logo> EVENTRA </Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem>
            <IconButton aria-label="cart" onClick={openCart}>
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
    // <header>
    //   <img
    //     src="https://i.ibb.co/LkdYTBC/eventra-modified.png"
    //     style={{ width: "47px", height: "47px" }}
    //     alt=""
    //   />
    //   <Link to="/">EVENTRA</Link>
    //   <nav ref={navRef}>
    //     <Link to="/">Home</Link>
    //     <Link to="/contact">Contact Us</Link>
    //     <Link to="/about">About Us</Link>
    //     <IconButton aria-label="cart" onClick={openCart}>
    //       <Badge badgeContent={cartQuantity} color="primary">
    //         <ShoppingCartOutlined color="action" />
    //       </Badge>
    //     </IconButton>
    //     <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    //       <FaTimes />
    //     </button>
    //   </nav>
    //   <button className="nav-btn" onClick={showNavbar}>
    //     <FaBars />
    //   </button>
    // </header>
  );
};

export default Navbar;

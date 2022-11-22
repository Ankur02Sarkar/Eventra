import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../../assets/cake.png";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useShoppingCart } from "../../context/Cart";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <Nav>
        <NavLink to="/" style={{columnGap:"20px"}}>
          <img
            src={"https://i.ibb.co/LkdYTBC/eventra-modified.png"}
            style={{ width: "47px", height: "47px" }}
          />
          EVENTRA
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/producttypes" activeStyle>
            Products
          </NavLink>
          <NavLink to="/servicetypes" activeStyle>
            Services
          </NavLink>
          {/* <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink> */}
        </NavMenu>
        <IconButton aria-label="cart" onClick={openCart}>
          <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartOutlined color="action" />
          </Badge>
        </IconButton>
      </Nav>
    </>
  );
};

export default Navbar;

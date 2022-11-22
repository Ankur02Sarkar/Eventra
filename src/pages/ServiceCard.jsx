import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { service } from "./productTypes";

const ServiceCard = () => {
  return (
    <div>
      <div class="productItemWrapper">
        {service.map((item) => (
          <>
            <div class="productItem">
              <div class="imgBx">
                <img src={item.img} alt="" />
              </div>
              <div class="productContent">
                <div class="Itemdetails">
                  <h2>
                    {item.title}
                    <br />
                    <span>{item.quote}</span>
                  </h2>
                  <div class="Itemdata">
                    <h3>
                      {item.price} Rs
                      <br />
                      <span>Price</span>
                    </h3>
                    <h3>
                      {item.rating}⭐
                      <br />
                      <span>Rating</span>
                    </h3>
                    <h3>
                      {item.deal}
                      <br />
                      <span>Deals</span>
                    </h3>
                  </div>
                  <div class="itemactionBtn">
                    <Link to={`/services/${item.category}`}>
                      <button>View More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;

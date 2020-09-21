import React from "react";
import "./Product.css";
function PRoduct() {
    const emoji = require("emoji-dictionary")
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__Rating">
                  <p>
                      
          </p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
    </div>
  );
}

export default PRoduct;

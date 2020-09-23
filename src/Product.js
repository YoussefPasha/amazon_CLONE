import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const CustomToast = ({ imageToast }) => {
    return (
      <div className="NotifyCenter">
        <img src={image} alt="" />
        {title}
      </div>
    );
  };
  const notify = () => {
    toast(<CustomToast />, { position: toast.POSITION.TOP_RIGHT });
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={(addToBasket, notify)}>Add to Basket</button>
    </div>
  );
}

export default Product;

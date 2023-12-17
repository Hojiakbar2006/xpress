import React, { useEffect, useState } from "react";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { acDeleteInCard, acInc, acDec } from "../../Redux/Card";
import { toast } from "react-toastify";

export function CartItem({ setAllPrice }) {
  const card = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));

    let price = 0;

    card.map((item) => {
      price +=
        +item.discaunt !== 0
          ? (+item.price - (+item.price * +item.discaunt) / 100) * item.quantity
          : +item.price * item.quantity;
      return null;
    });

    setTotal(Math.floor(price));
    setAllPrice(Math.floor(price));
  }, [card, setAllPrice]);

  return (
    <section id="ItemCard">
      <h2>Cart</h2>
      {card.length ? (
        <div className="product">
          {card.map((item, index) => {
            return (
              <div key={index} className="item">
                <figure>
                  <img src={item.img} alt={item.img} />
                </figure>
                <div className="aboutItem">
                  <h3>{item.name}</h3>
                  <h3 style={+item.discaunt === 0 ? { display: "none" } : {}}>
                    {item.discaunt}%
                  </h3>
                  <h2>
                    <s style={+item.discaunt === 0 ? { display: "none" } : {}}>
                      {item.price}
                    </s>{" "}
                    <span>
                      {+item.discaunt !== 0 
                        ? +item.price - (+item.price * +item.discaunt) / 100
                        : item.price}$        
                    </span>
                  </h2>
                </div>
                <div className="btn-group">
                  <button
                    onClick={() => {
                      dispatch(acDeleteInCard(item.id));
                      toast("Product Removed From Cart");
                    }}
                  >
                    <DeleteIcon />
                  </button>
                  <div className="count-btn">
                    <button onClick={() => dispatch(acInc(item.id))}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => dispatch(acDec(item.id))}>-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="product">
          <h1>No Product</h1>
        </div>
      )}
      <div className="Purchase">
        <p>all order prices</p>
        <p>{total}$</p>
      </div>
    </section>
  );
}

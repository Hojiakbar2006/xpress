import { React } from "react";
import "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

export function Product1({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <div id="BigProduct">
        {data.length ? (
          <div id="ProductCards">
            {data.map((item, index) => {
              const images = JSON.parse(item.img || "[]")[0];
              return (
                <div
                  id="product-card"
                  key={index}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}
                >
                  <figure>
                    <img src={images} alt="" />
                  </figure>
                  <span>
                    <p>{item.name}</p>
                    <p>{item.price + " $"}</p>
                  </span>
                </div>
              );
            })}
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              id="top"
            >
              Top
            </button>
          </div>
        ) : (
          <h1>No Product</h1>
        )}
      </div>
    </>
  );
}

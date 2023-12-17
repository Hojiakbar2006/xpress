import React from "react";
import "./NewProduct.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewProduct() {
  const [arrival, setArrival] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`${"https://xpress.pandashop.uz/api/newarrival"}`)
      .then(async (res) => {
        const data = (await res.data) || [];
        const myData = [];

        data.map((item) => {
          myData.push({
            id: item.id,
            img: JSON.parse(item.img || "[]")[0],
          });
          return null;
        });
        setArrival(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="newProduct">
      <div className="secName">
        <h3>New Arrival</h3>
      </div>

      <div className="showProduct">
        {arrival.map((item, index) => {
          return (
            <figure key={index} onClick={() => navigate(`product/${item.id}`)}>
              <img src={item.img} alt="" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

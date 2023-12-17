import { React, useEffect, useState } from "react";
import "./RecentProduct.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function RecentProduct() {
  const [recentData, setRecentData] = useState([])
  const navigate = useNavigate()

useEffect(() => {
    axios("https://xpress.pandashop.uz/api/mostviewed")
      .then((res) => {
        setRecentData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="recentBlog">
      <div className="secName">
        <h3>Recent Blog Posts</h3>
        <p>
          Shops are necessary places,a where people go to buy is on of the
          necessary their
        </p>
      </div>
      <div className="showRecProduct">
        {recentData.map((item, index) => {
            const img = JSON.parse(item.img)[0];
          return (
            <div key={index} className="recProductCard">
              <figure>
                <img src={img} alt="" />
              </figure>
              <div>
                <h4>{item.productName}</h4>
                <p>{item.name}</p>
                <div className="readMoreCard">
                    <button onClick={
                      ()=>navigate(`product/${item.id}`)
                    }>SEE MORE</button>
                    <p>qachon qoshilgani</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

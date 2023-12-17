import { React, useState, useEffect } from "react";
import "./ADS.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ADS() {
  const [adsData, setAdsData] = useState([]);
  const [Order, setOrder] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`${"https://xpress.pandashop.uz/api/ads"}`)
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
        setAdsData(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const lastOrder = adsData.length - 1;
    if (Order < 0) {
      setOrder(lastOrder);
    }
    if (Order > lastOrder) {
      setOrder(0);
    }
  }, [Order, adsData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setOrder(Order + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [Order]);

  return (
    <section id="ADS">
      <div className="showAdsProduct">
        {adsData.map((item, index) => {
          let position = "nextSlide";
          if (index === Order) {
            position = "activeSlide";
          }
          if (
            index === Order - 1 ||
            (Order === 0 && index === adsData.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <figure
              className={position}
              key={item.id}
              onClick={() => {
                navigate(`product/${item.id}`);
              }}
            >
              <img src={item.img} alt="" />
            </figure>
          );
        })}
      </div>
      <div className="sliderBtnGroup">
        {adsData.map((item, index) => {
          return (
            <button
              key={item.id}
              className={Order === index ? "active-btn" : ""}
              onClick={() => {
                setOrder(index);
              }}
            ></button>
          );
        })}
      </div>
    </section>
  );
}

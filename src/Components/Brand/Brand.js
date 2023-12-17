import React from "react";
import "./Brand.css";

import Brand1 from "./image-removebg-preview - 2021-07-17T020006 1.png";
import { useNavigate } from 'react-router-dom';

const BrandData = [
  {
    img: Brand1,
  },
  {
    img: Brand1,
  },
  {
    img: Brand1,
  },
  {
    img: Brand1,
  },
];

export function Brand() {
  const navigate = useNavigate()
  return (
    <section id="Brand">
      <div className="secName">
        <h3>Our Top Brand</h3>
        <button onClick={()=>navigate("/")}>VIEW ALL</button>
      </div>
      <div className="showBrand">
        {BrandData.map((item, index) => {
          return (
            <figure key={index}> 
              <img src={Brand1} alt="" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

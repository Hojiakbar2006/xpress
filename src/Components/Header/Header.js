import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/Css/Global.css"
import "./Header.css";
import BannerImg from "../../Assets/images/Banner.png";
import vector from "../../Assets/images/Vector.png";


export function Header() {
  const navigate = useNavigate()
  const [headerData] = useState({
    collectionName: "Trendy Collection",
    request: "Shop For What You Want",
    request2:
      "Shops are necessary places, where people",
    article: BannerImg,
  });
  return (
    <>
      <header id="header">
      <section id="Intro">
      <div className="left-intro">
        <h4>{headerData.collectionName}</h4>
        <h1>{headerData.request}</h1>
        <p>{headerData.request2}</p>
        <button onClick={()=>navigate("/product")}>
          Start Shopping
            <img src={vector} alt="" />
        </button>
      </div>
      <figure className="right-intro">
        <img src={headerData.article} alt="" />
      </figure>
    </section>
      </header>
    </>
  );
}

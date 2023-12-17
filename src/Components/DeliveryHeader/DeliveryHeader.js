import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryHeader.css"
import vector from "../../Assets/images/Vector.png";
import DeliveryImage from "../../Assets/images/del_ic.webp"

export function DeliveryHeader() {
  const navigate = useNavigate()

    const [headerDat] = useState({

    request: "Order Products Faster Easier",
    request2:
      "Order your favourite clothes at any time amd we will deliver them right to where you are",
    article: DeliveryImage,
  });

    return(
        <>
        <header id="Delivery_header">
      <section id="Delivery_Intro">
      <div className="Delivery_left_intro">
        <h1>{headerDat.request}</h1>
        <p>{headerDat.request2}</p>
        <button onClick={()=>navigate("/product")}>
          Get Started
            <img src={vector} alt="" />
        </button>
      </div>
      <figure className="Delivery_right_intro">
        <img src={headerDat.article} alt="" />
      </figure>
    </section>
      </header>
    </>
    )
}
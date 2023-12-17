import React, {useState} from "react";
import "./DeliveryAbout.css"
import DeliveryImage from "../../Assets/images/about-ilustration.svg"

export function DeliveryAbout() {


    const [headerDat] = useState({

    request: "Find out A little more about us",
    request2:
      "We are a company deticated to the distrubition of products by delivery to your home or to the place where you are, with the best quality of delivery.",
    article: DeliveryImage,
  });

    return(
        <>
        <header id="Delivery_about">
      <section id="Delivery_about_Intro">
        <figure className="Delivery_about_right_intro">
        <img src={headerDat.article} alt="" />
      </figure>
      <div className="Delivery_about_left_intro">
        <h1>{headerDat.request}</h1>
        <p>{headerDat.request2}</p>
      </div>
      
    </section>
      </header>
    </>
    )
}
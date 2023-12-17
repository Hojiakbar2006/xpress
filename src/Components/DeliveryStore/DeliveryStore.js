import React, {useState} from "react";
import "./DeliveryStore.css"
import DeliveryImage from "../../Assets/images/app-ilustration.svg"
import AppleLogo from "../../Assets/images/Apple_logo_black.svg.png"
import GooglePlayLogo from "../../Assets/images/GooglePlayLogo.png"


export function DeliveryStore() {


    const [headerDat] = useState({

    request: "Watch your Delivery at any time",
    request2:
      "We are a company deticated to the distrubition of products by delivery to your home or to the place where you are, with the best quality of delivery.",
    article: DeliveryImage,
  });

    return(
        <>
        <header id="Delivery_store">
      <section id="Delivery_store_Intro">
        <figure className="Delivery_store_right_intro">
        <img src={headerDat.article} alt="" />
      </figure>
      <div className="Delivery_store_left_intro">
        <h1>{headerDat.request}</h1>
        <p>{headerDat.request2}</p>
        <div id="BrendsLogos">
            <a href="https://www.apple.com/ru/app-store/"  >
                <button><img src={AppleLogo} alt=""  />App Store</button>
            </a>
            <a href="https://play.google.com/">
            <button><img src={GooglePlayLogo} alt="" />Google Play </button>

            </a>
            
        </div>
      </div>
      
    </section>
      </header>
    </>
    )
}
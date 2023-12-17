import React from "react";
import "./DeliveryServices.css"
import PImage from "../../Assets/images/services1-ilustration.svg"
import PImage2 from "../../Assets/images/services2-ilustration.svg"
import PImage3 from "../../Assets/images/services3-ilustration.svg"
import { useNavigate } from "react-router-dom";


export function DeliveryServices() {

    const navigate = useNavigate()
    

    return(
        <div id="Services">
            <div>
                <div id="Title">
                    <h1>Some Services We Offer</h1>
                </div>
                <div  id="ServiceCard">
                {Mydata.map((item) =>{
                    return(
                        <div id="Items" key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.img} alt="" /> 
                            <p>{item.about}</p>
                            <button onClick={() =>{
                                navigate("/")
                            }}>{item.learn}</button>                                          
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}


const Mydata = [
    {
        id: 1,
        title: "Payment Done",
        img: PImage,
        about:"Pay with a Visa or PayPay card and without much ado",
        learn: "Learn More",
    },
     {
        id: 2,
        title: "Find Your Product",
        img: PImage2,
        about:"We offer sale of products through the internet.",
        learn: "Learn More"
    },
     {
        id: 3,
        title: "Product Received",
        img: PImage3,
        about:"In our app you can see the delay time of your order.",
        learn: "Learn More"
    },
]
import React from "react";
import "./DeliveryContact.css"
import { useNavigate } from "react-router-dom";


export function DeliveryContact() {
    const navigate = useNavigate()
    return(
        <div id="DeliveryContact">
            <div id="DeliveryContact_about"> 
                <h1>Contact Us From Here</h1>
                <p>You can contact us from here,you can wtite to us,call us or visit our service center, we wil gladly asist you.</p>
            </div>
            <div id="DeliveryContact_address">
                <h4>Telephone: <span>+99899-999-9999</span></h4>
                <h4>Email: <span>xpress@gmail.com</span></h4>
                <h4>Location: <span>Namangan - Uzbekistan</span></h4>
            </div>
            <div id="DeliveryContact_submittion">
                <button onClick={() =>{
                    navigate("/contact")
                }}>Contact Us</button>
            </div>
            
        </div>
    )
}
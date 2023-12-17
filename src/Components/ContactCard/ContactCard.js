import React from "react";
import "./ContactCard.css"
import {PatternFormat} from "react-number-format";




export function ContactCard() {
    return(
        <div id="ContactCard_header">
            <form id="Card_Contact">
                <h1>Contact Us</h1>
                <div id="Card_Contact_items">
                    <input type="text"placeholder="Enter your Name" required/>
                <input type="text"placeholder="Enter your Email address" required/>
                <PatternFormat
                    autoComplete="off"
                    required
                    format="+998 (##) ### ####"
                    placeholder="+998 (##) ### ####"
                    thousandSeparator={true}
                />
                <textarea  cols="0" rows="6"required />
                </div>
                
                <button>Submit</button>
            </form>
        </div>
    )
}
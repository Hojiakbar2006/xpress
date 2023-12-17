import React from "react";
import "./ContactHeader.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

export function ContactHeader() {
    return(
        <div id="ContactHeader">
            <div id="ContactHeader_Cards">
                <div className="ContactHeader_Cards_items">
                    <div><LocationOnIcon style={MyStyle.Locsty} /></div>
                    <h5>OUR MAIN OFFICE</h5>
                    <p>SoHo 94 Broadway St New York, NY 1001</p>
                </div>
            </div>
            <div id="ContactHeader_Cards">
                <div className="ContactHeader_Cards_items">
                    <div><PhoneIcon style={MyStyle.Locsty} /></div>
                    <h5>PHONE NUMBER</h5>
                    <p>+99899-999-9999</p>
                </div>
            </div>
            <div id="ContactHeader_Cards">
                <div className="ContactHeader_Cards_items">
                    <div><TelegramIcon style={MyStyle.Locsty} /></div>
                    <h5>TELEGRAM</h5>
                    <p><a href="https://t.me/KH29_MM19 " >Our Telegram</a></p>
                </div>
            </div>
            <div id="ContactHeader_Cards">
                <div className="ContactHeader_Cards_items">
                    <div><EmailIcon style={MyStyle.Locsty} /></div>
                    <h5>EMAIL</h5>
                    <p>Xpress@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

const MyStyle = {
    Locsty: {
        fontSize: "60px",
        color: "89D9E2"
    }
}
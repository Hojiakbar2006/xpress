import React from "react";
import "./MyOrders.css"
import { PatternFormat } from "react-number-format";
import SearchIcon from '@mui/icons-material/Search';



export function MyOrders() {
    return(
        <div id="MyOrders_header">
            <div id="MyOrders_about">
                <h1>
                    Enter your phone number to view your order
                </h1>
                <form id="MyOrders_contact">
                   <PatternFormat
                    autoComplete="off"
                    required
                    format="+998 (##) ### ####"
                    placeholder="Enter your phone number"
                    thousandSeparator={true}
                   />
                   <button><SearchIcon/></button>
                </form>
            </div>
            <div id="OrderCard">
                <h1>Your order</h1>
                <div id="OrderCard_Items">
                    <img src="" alt="" />
                    <div className="OrderCard_Items_titles">
                        <p>Nomi: Futbolka</p>
                        <p>Narxi: 120 000 sum</p>
                        <p>Status: Tasdiqlanmagan</p>
                    </div>
                    <div className="OrderCard_Items_titles">
                        <p>27.10.2022 <span>23:45</span></p>
                        <p>3 kunda yetkazib beriladi</p>
                        <div id="OrderCard_Items_confirm">
                            <button>Bekor qilish</button>
                            <button>Info</button>
                        </div>
                    </div>
                </div>
                  <div id="OrderCard_Items">
                    <img src="" alt="" />
                    <div className="OrderCard_Items_titles">
                        <p>Nomi: Futbolka</p>    
                        <p>Narxi: 120 000 sum</p>      
                        <p>Status: Tasdiqlanmagan</p>   
                    </div>                                    
                    <div className="OrderCard_Items_titles">
                        <p>27.10.2022 <span>23:45</span></p>
                        <p>3 kunda yetkazib beriladi</p>
                        <div id="OrderCard_Items_confirm">
                            <button>Bekor qilish</button>
                            <button>Info</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

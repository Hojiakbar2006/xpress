import React from "react";
import "./Speciality.css"

import icon1 from "./icon/Vector.svg";
import icon2 from "./icon/Group.svg";
import icon3 from "./icon/Vector (1).svg";

export function Speciality() {
  return (
    <section id="Speciality">
      <h3>Our Speciality</h3>
      <p>
        We too believe that shopping is relaxing is thing 
      </p>
      <div className="showSpeciality">
        <div>
          <span>
            <img src={icon1} alt="" />
          </span>
          <h4>24/7 Services</h4>
          <p>
            Shops are necessary places,a where people go{" "}
          </p>
        </div>
        <div>
          <span>
            <img src={icon2} alt="" />
          </span>
          <h4>Exchange Opportunites</h4>
          <p>
            Shops are necessary places,a where people go{" "}
          </p>
        </div>
        <div>
          <span>
            <img src={icon3} alt="" />
          </span>
          <h4>More Then Offer</h4>
          <p>
            Shops are necessary places,a where people go {" "}
          </p>
        </div>
      </div>
    </section>
  );
}

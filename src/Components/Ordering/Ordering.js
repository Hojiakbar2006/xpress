import React, { useState } from "react";
import "./Ordering.css";
import { useSelector } from "react-redux";
import { PatternFormat } from "react-number-format";
import axios from "axios";
import { toast } from "react-toastify";

export function Ordering({ allPrice }) {
  const card = useSelector((state) => state.product);
  const [phone, setPhone] = useState("");
  const api = process.env.REACT_APP_API;

  return (
    <>
      <section id="ordering">
        <h2>ordering department</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            var data = JSON.stringify({
              customer: e.target.surname.value,
              date: new Date().toJSON(),
              phone: `${phone}`,
              total: `${allPrice}`,
              orders: card,
            });


            var config = {
              method: "post",
              url: `${api}/order`,
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };

            axios(config)
              .then(function (response) {
                toast(response.data.message);
                localStorage.clear(card)
                console.log(response.data);
              })
              .catch(function (error) {
                toast(error.response.data.message);
              });
          }}
        >
          <input type="text" autoComplete="off" name="surname" placeholder="First Name" />
          <PatternFormat
            value={phone}
            format="+99 8(##) ### ####"
            allowEmptyFormatting
            mask="_"
            onValueChange={(e) => {
              console.log();
              setPhone(e.floatValue);
            }}
          />
          <input type="submit" value="placing an order" />
        </form>
      </section>
    </>
  );
}

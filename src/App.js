import { React, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./Assets/Css/Global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Product } from "./Pages/Product/Product";
import { ProductView } from "./Pages/ProductView/ProductView";
import { Delivery } from "./Pages/Delivery/Delivery";
import { Contact } from "./Pages/Contact/Contact";
import { Cart } from "./Pages/Cart/Cart";
import { MyOrders } from "./Pages/MyOrders/MyOrders";

export function App() {
  const api = process.env.REACT_APP_API;

  useEffect(() => {
    axios(`${api}/guest/add`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product" element={<Product />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </>
  );
}

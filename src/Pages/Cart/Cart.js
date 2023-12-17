import React, { useState } from "react";
import { CartItem } from "../../Components/CartItem/CartItem";
import { Ordering } from "../../Components/Ordering/Ordering";

export function Cart() {
  const [allPrice, setAllPrice] = useState(0);

  return (
    <>
      <CartItem setAllPrice={setAllPrice} />
      <Ordering allPrice={allPrice} />
    </>
  );
}

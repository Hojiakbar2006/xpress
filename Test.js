const a = {
  customer: "Oybek Abdujabborov",
  phone: "950270496",
  date: "2022-10-19T18:34:08.059Z",
  total: "2500000",
  orders: [
    {
      name: "Kurtka",
      size: "XXL",
      img: "https://xpress.pandashop.uz/xpress_01666196566950.jpg",
      forWhom: "Ayollar uchun",
      quantity: 1,
      price: "123000",
      discaunt: 0,
      season: "Kuzgi",
    },
    {
      name: "Kurtka2",
      size: "XXL",
      img: "https://xpress.pandashop.uz/xpress_01666197576197.jpg",
      forWhom: "Ayollar uchun",
      quantity: 1,
      price: "223000",
      discaunt: 10,
      season: "Qishgi",
    },
  ],
};

const b = {
  customer: "Абдужабборов",
  date: "2022-10-28T11:26:57.272Z",
  phone: 123456789,
  total: 117.15,
  orders: [
    {
      name: "Kurtka",
      size: "XXL",
      img: "https://xpress.pandashop.uz/xpress_01666196566950.jpg",
      forWhom: "Ayollar uchun",
      quantity: 1,
      price: "123000",
      discaunt: 0,
      season: "Kuzgi",
    },
  ],
};

console.log(JSON.stringify(b));

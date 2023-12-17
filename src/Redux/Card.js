const card = JSON.parse(localStorage.getItem("card") || "[]");

export const reCard = (state = card, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, action.payload];

    case "DELETE_CARD":
      return state.filter((item) => item.id !== action.payload);

    case "INC":
      state.filter((product) => {
        if (product.id === action.payload) {
          product.quantity >= 9
            ? (product.quantity = 9)
            : (product.quantity += 1);
          return product;
        }
        return product;
      });
      return [...state];
    case "DEC":
      state.filter((product) => {
        if (product.id === action.payload) {
          product.quantity <= 1
            ? (product.quantity = 1)
            : (product.quantity -= 1);
          return product;
        }
        return product;
      });
      return [...state];

    case "CLEAR_CARD":
      return [];

    default:
      return state;
  }
};

export const acAddCard = (card) => ({
  type: "ADD_CARD",
  payload: card,
});

export const acDeleteInCard = (id) => ({
  type: "DELETE_CARD",
  payload: id,
});

export const acInc = (id) => ({
  type: "INC",
  payload: id,
});
export const acDec = (id) => ({
  type: "DEC",
  payload: id,
});

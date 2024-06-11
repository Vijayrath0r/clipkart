const addProductToRecentlyVisited = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_RECENTLY_VISITED',
    payload: product
  };
};
const addProductToCart = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: product
  };
};

const removeProductFromCart = (product) => {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: product
  };
};


export { addProductToRecentlyVisited, addProductToCart, removeProductFromCart }

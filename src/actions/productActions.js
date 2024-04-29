export const addProductToRecentlyVisited = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_RECENTLY_VISITED',
    payload: product
  };
};

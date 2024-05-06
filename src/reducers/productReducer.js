const initialState = {
  recentlyVisited: []
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_RECENTLY_VISITED':
      const { product } = action.payload;
      // Check if the product is valid
      if (!product) {
        console.error("Invalid product:", product);
        return state;
      }
      // Check if the product already exists in recently visited, if yes, remove it
      const updatedRecentlyVisited = state.recentlyVisited.filter(
        (p) => p.id !== product.id
      );
      // Add the product to the beginning of the recently visited array
      const newState = {
        ...state,
        recentlyVisited: [product, ...updatedRecentlyVisited]
      };
      return newState;
    default:
      return state;
  }
};
export default productReducer;


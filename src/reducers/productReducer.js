const initialState = {
  recentlyVisited: [],
  cart: JSON.parse(localStorage.getItem('cart')) || []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_RECENTLY_VISITED': {
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
    }
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;
      // Check if the product is valid
      if (!product) {
        console.error("Invalid product:", product);
        return state;
      }
      // Check if the product already exists in the cart, if yes, remove it
      const updatedCart = state.cart.filter(
        (p) => p.id !== product.id
      );
      // Add the product to the beginning of the cart array
      const newState = {
        ...state,
        cart: [product, ...updatedCart]
      };
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(newState.cart));
      return newState;
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      const { product } = action.payload;
      // Check if the product is valid
      if (!product) {
        console.error("Invalid product:", product);
        return state;
      }
      // Remove the product from the cart
      const updatedCart = state.cart.filter(
        (p) => p.id !== product.id
      );
      const newState = {
        ...state,
        cart: updatedCart
      };
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(newState.cart));
      return newState;
    }
    default:
      return state;
  }
};

export default productReducer;

import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const initialState = {
  cart: {
    products: [],
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.cart.products.concat(action.payload),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.cart.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;

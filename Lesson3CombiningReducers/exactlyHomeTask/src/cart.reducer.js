import { ADD, DELETE } from './cart.actions';

const initialState = {
  cart: {
    products: [],
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        products: state.cart.products.concat(action.payload.product),
      };
    case DELETE:
      return {
        ...state,
        products: state.cart.products.filter(product => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default productReducer;

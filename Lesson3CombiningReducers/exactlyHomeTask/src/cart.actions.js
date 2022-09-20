export const ADD_PRODUCT = 'PRODUCT/ADD';
export const DELETE_PRODUCT = 'PRODUCT/DELETE';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: {
    product,
  },
});

export const removeProduct = id => ({
  type: DELETE_PRODUCT,
  payload: {
    id,
  },
});

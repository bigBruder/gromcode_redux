export const ADD = 'PRODUCT/ADD';
export const DELETE = 'PRODUCT/DELETE';

export const addProduct = product => ({
  type: ADD,
  payload: {
    product,
  },
});

export const removeProduct = id => ({
  type: DELETE,
  payload: {
    id,
  },
});

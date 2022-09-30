import { getUserData } from './users.gateway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const userDataReceived = userData => ({
  type: USER_DATA_RECEIVED,
  payload: {
    userData,
  },
});

export const fetchUserData = userName =>
  function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      dispatch(userDataReceived(userData));
    });
    // console.group(action.type);
    // console.info('dispatching', action);
    // let result = next(action);
    // console.log('next state', store.getState());
    // console.groupEnd();
    // return result;
  };

import { LANGUAGE } from './language.actions';

const initialState = { language: 'en' };

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;

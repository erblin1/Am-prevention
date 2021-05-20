import { FaqActionTypes } from "./faq-types";

const INITIAL_STATE = {
  faqs: [],
  error: null,
};

const faqReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FaqActionTypes.SET_FAQ:
      return { ...state, faqs: action.payload, error: null };

    default:
      return state;
  }
};

export default faqReducer;

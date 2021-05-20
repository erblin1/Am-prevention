import { QuizActionTypes } from "./quiz-types";

const INITIAL_STATE = {
  quizes: [],
  error: null,
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizActionTypes.SET_QUIZES:
      return { ...state, quizes: action.payload, error: null };
    // case QuizActionTypes.ADD_QUESTION:
    //   return { ...state, quizes: action.payload };

    default:
      return state;
  }
};

export default quizReducer;

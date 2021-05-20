import { CourseActionTypes } from "./course-types";

const INITIAL_STATE = {
  courses: [],
  error: null,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseActionTypes.SET_COURSES:
      return { ...state, courses: action.payload, error: null };

    default:
      return state;
  }
};

export default courseReducer;

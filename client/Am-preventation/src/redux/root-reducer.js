import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user-reducer";
import quizReducer from "./quiz/quiz-reducer";
import courseReducer from "./course/course-reducer";
import faqReducer from "./faq/faq-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["_user"],
};

const rootReducer = combineReducers({
  _user: userReducer,
  _quizes: quizReducer,
  _courses: courseReducer,
  _faqs: faqReducer,
});

export default persistReducer(persistConfig, rootReducer);

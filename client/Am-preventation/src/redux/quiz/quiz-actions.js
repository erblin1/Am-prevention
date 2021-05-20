import { QuizActionTypes } from "./quiz-types";
import axios from "axios";
import { UpdateUser } from "../user/user-actions";
//Thunk Actions
export const createQuiz = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/quiz",
          data
        );
        // dispatch(createQuiz(response.data.user));
        resolve(true);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

export const getQuizes = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get("http://localhost:5000/api/quiz");

        dispatch(setQuizes(response.data.quizes));
        resolve(true);
      } catch (error) {
        resolve(false);
      }
    });
  };
};

export const finishAttempt = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/quiz/finishAttempt",
          data
        );

        dispatch(UpdateUser(response.data.user));

        resolve(true);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

// export const userSignOut = () => {
//   return (dispatch) => {
//     return new Promise(async (resolve) => {
//       try {
//         dispatch(SignOutSuccess());
//         resolve(true);
//       } catch (error) {
//         console.log(error);
//         resolve(false);
//       }
//     });
//   };
// };

//Pure Actions
export const setQuizes = (data) => ({
  type: QuizActionTypes.SET_QUIZES,
  payload: data,
});

// export const addQuestion = (data) => ({
//   type: QuizActionTypes.ADD_QUESTION,
//   payload: data,
// });

// export const SignOutSuccess = () => ({
//   type: UserActionTypes.SIGN_OUT_SUCCESS,
// });

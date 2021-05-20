import { UserActionTypes } from "./user-types";
import axios from "axios";

//Thunk Actions
export const userSignUp = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          data
        );
        dispatch(SignUpSuccess(response.data.user));
        resolve(true);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

export const userSignIn = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/signin",
          data
        );

        dispatch(SignInSuccess(response.data.user));
        resolve(true);
      } catch (error) {
        resolve(false);
        alert("Invalid Username or Password, Please try again!");
      }
    });
  };
};

export const userSignOut = () => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        dispatch(SignOutSuccess());
        resolve(true);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

//Pure Actions
export const SignUpSuccess = (data) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const SignInSuccess = (data) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: data,
});

export const SignOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const UpdateUser = (data) => ({
  type: UserActionTypes.UPDATE_USER,
  payload: data,
});

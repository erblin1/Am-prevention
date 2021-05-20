import { FaqActionTypes } from "./faq-types";
import axios from "axios";

//Thunk Actions
export const getFaqs = () => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.get("http://localhost:5000/api/faq");
        if (response) {
          dispatch(setFaqs(response.data.faqs));
          resolve(true);
        }
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

export const createFaq = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/faq",
          data
        );
        if (response) resolve(true);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

//Pure Actions
export const setFaqs = (data) => ({
  type: FaqActionTypes.SET_FAQ,
  payload: data,
});

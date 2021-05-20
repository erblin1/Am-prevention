import { CourseActionTypes } from "./course-types";
import axios from "axios";
import { UpdateUser } from "../user/user-actions";

//Thunk Actions
export const getCourses = () => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.get("http://localhost:5000/api/course");
        if (response) {
          dispatch(setCourses(response.data.courses));
          resolve(true);
        }
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

export const createCourse = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/course",
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

export const finishCourseAttempt = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/course/finishAttempt",
          data
        );
        dispatch(UpdateUser(response.data.user));
        if (response) resolve(true);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  };
};

//Pure Actions
export const setCourses = (data) => ({
  type: CourseActionTypes.SET_COURSES,
  payload: data,
});

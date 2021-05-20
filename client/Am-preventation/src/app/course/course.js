import axios from "axios";
import React, { useState } from "react";
import "./course.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter } from "react-router";
import { finishAttempt } from "../../redux/quiz/quiz-actions";
import ReactPlayer from "react-player";
import SideNav from '../dashborad/SideNav'
import { finishCourseAttempt } from "../../redux/course/course-actions";

const Course = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [_course] = useSelector((state) =>
    state._courses.courses.filter((course) => course._id === id)
  );
  const _user = useSelector((state) => state._user.currentUser);

  const onFinishAttempt = async () => {
    const response = await dispatch(
      finishCourseAttempt({ userId: _user._id, courseId: _course._id })
    );
    if (response) history.push("/Profile/Courses");
  };
  return (
    <>
    <SideNav />
    <div className="wrap">
      <div className="main">
        <div className="info">
          <div className="row gutters">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
      
      <ReactPlayer className="custom_styling " controls url={_course.course_content} />
      <div className="btns">
      <h3>{_course.course_name}</h3>
      <div className="content-right">
      <button className="btn btn-primary" onClick={onFinishAttempt}>
        All Courses
      </button>
      </div>
      </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default withRouter(Course);
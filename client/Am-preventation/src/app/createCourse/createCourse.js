import { useDispatch, useSelector } from "react-redux";
import "./createCourse.scss";
import SideNav from "../dashborad/SideNav";
import { useEffect, useState } from "react";
import { createCourse } from "../../redux/course/course-actions";
import { withRouter } from "react-router";

const CreateCourse = ({ history }) => {
  const _user = useSelector((state) => state._user);
  let [course, setCourse] = useState({});

  const dispatch = useDispatch();
  const submitCourse = async () => {
    // console.log("Submitting with", quiz);
    const response = await dispatch(createCourse(course));
    if (response) history.push("/Profile/Courses");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  return (
    <div>
      <SideNav />
      <div className="wrapper">
        <div className="main_content">
          <div className="info">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Create Course</h6>
                      </div>

                      <div className="form-group">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <label className="text-right" for="fullName">
                            Course Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="course_name"
                            placeholder="Enter quiz title"
                            onChange={onChangeHandler}
                          />
                          <label>Course Content</label>
                          <input
                            type="text"
                            name="course_content"
                            className="form-control"
                            placeholder="Enter course content"
                            onChange={onChangeHandler}
                          ></input>
                        </div>

                        {/* {quiz?.map((question, index) => (
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <label className="text-right" for="fullName">
                                Question
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Enter Question"
                                name="question"
                                onChange={(e) => onQuestionChange(e, index)}
                              />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <label className="text-right" for="eMail">
                                Correct Option
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                id="eMail"
                                placeholder="Enter Correct Option"
                                onChange={(e) =>
                                  onCorrectOptionChange(e, index)
                                }
                              />
                              <label className="btn btn-outline-danger form-control">
                                Note! The correct option should be same in the
                                given options
                              </label>
                            </div>

                            {question?.options?.map((option, i) => (
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <label className="text-right" for="phone">
                                  Options
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phone"
                                  placeholder="Enter Option"
                                  onChange={(e) => onOptionChange(e, index, i)}
                                />
                              </div>
                            ))}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                              <div className="text-right">
                                <button
                                  className="btn btn-primary"
                                  onClick={() => {
                                    quiz[index].options.push(" ");
                                    setQuiz([...quiz]);
                                  }}
                                >
                                  Add Option
                                </button>
                              </div>
                            </div>
                          </div>
                        ))} */}

                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={submitCourse}
                        >
                          Submit Course
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
    </div>
  );
};

export default withRouter(CreateCourse);

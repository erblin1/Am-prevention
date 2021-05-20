import { useDispatch, useSelector } from "react-redux";
import "./createQuiz.scss";
import SideNav from "../dashborad/SideNav";
import { useEffect, useState } from "react";
import { createQuiz } from "../../redux/quiz/quiz-actions";
import { withRouter } from "react-router";
const CreateQuiz = ({ history }) => {
  const _user = useSelector((state) => state._user);
  let [quiz, setQuiz] = useState([
    {
      question: "asdsad",
      answer: "asdjklaksjd",
      options: [],
    },
  ]);
  const [quizTitle, setQuizTitle] = useState("");

  const dispatch = useDispatch();
  const submitQuiz = async () => {
    console.log("Submitting with", quiz);
    const response = await dispatch(
      createQuiz({ quiz_name: quizTitle, quiz_content: quiz })
    );
    if (response) history.push("/Profile/Quizes");
  };

  const onQuizTitleChange = (e) => {
    const { name, value } = e.target;
    setQuizTitle(value);
  };

  const onQuestionChange = (e, index) => {
    const { name, value } = e.target;
    quiz[index].question = value;
    setQuiz([...quiz]);
  };

  const onOptionChange = (e, index, i) => {
    const { name, value } = e.target;
    quiz[index].options[i] = value;
    setQuiz([...quiz]);
  };

  const onCorrectOptionChange = (e, index) => {
    const { name, value } = e.target;
    quiz[index].answer = value;
    setQuiz([...quiz]);
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
                        <h6 className="mb-2 text-primary">Create Quiz</h6>
                      </div>

                      <div className="form-group">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <label className="text-right" for="fullName">
                            Quiz Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Enter quiz title"
                            onChange={onQuizTitleChange}
                          />
                        </div>
                        {quiz?.map((question, index) => (
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
                        ))}
                        <div className="btns">
                          <div >
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setQuiz([
                                ...quiz,
                                { question: "", answer: "", options: [] },
                              ]);
                            }}
                          >
                            Add Question
                          </button>
                        </div>
                        <div className="content-right ">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={submitQuiz}
                        >
                          Submit
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
      </div>
    </div>
  );
};

export default withRouter(CreateQuiz);

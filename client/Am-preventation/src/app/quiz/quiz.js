import axios from "axios";
import React, { useEffect, useState } from "react";
import "./quiz.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter } from "react-router";
import { finishAttempt } from "../../redux/quiz/quiz-actions";

const Quiz = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [_quiz] = useSelector((state) =>
    state._quizes.quizes.filter((quiz) => quiz._id === id)
  );

  const _user = useSelector((state) => state._user.currentUser);
  const [marks, setMarks] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [questionAndAnswers, setQuestionAndAnswers] = useState();
  const onQuestionAnswered = (e) => {
    const { value, name } = e.target;

    setTotalNumber(questionAndAnswers.length);

    let questionAnsweredWith = { question: name, answer: value };

    if (
      questionAndAnswers.some(
        (question) => question.answer === questionAnsweredWith.answer
      )
    ) {
      setMarks(marks + 1);
    } else console.log(questionAndAnswers);
  };
  const onFinishAttempt = async () => {
    // console.log(
    //   _quiz.quiz_content.map((question) => {
    //     // if(question.question===answers)
    //     console.log(question);
    //   })
    // );
    const response = await dispatch(
      finishAttempt({
        userId: _user._id,
        quizId: _quiz._id,
        marks: (marks / totalNumber) * 100,
      })
    );
    if (response) history.push("/Profile/Quizes");
    console.log(marks);
  };

  useEffect(() => {
    setQuestionAndAnswers(
      _quiz.quiz_content.map((question) => ({
        question: question.question,
        answer: question.answer,
      }))
    );
    return () => setMarks(0);
  }, []);
  return (
    <div className="wrap">
      <div className="main">
        <div className="info">
          <div className="row gutters">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <h3>{_quiz.quiz_name}</h3>

                  {_quiz.quiz_content.map((question, index) => (
                    <div className="cardsm">
                      <div className="bodysm">
                        <div className="que-padding">
                          <input
                            type="text"
                            className="form-control"
                            value={question.question}
                            readOnly
                          />
                        </div>
                        {/* <h2>Answer: {question.answer}</h2> */}
                        {question.options.map((option, i) => (
                          <div className="opt-sm">
                            <input
                              type="Radio"
                              name={question.question}
                              value={option}
                              id={option}
                              onChange={onQuestionAnswered}
                            />
                            <label for={option}>{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button className="btn btn-success" onClick={onFinishAttempt}>
                    Finish Attempt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Quiz);

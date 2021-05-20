import "./List.scss";
import SideNav from "../dashborad/SideNav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuizes } from "../../redux/quiz/quiz-actions";
function List() {
  const dispatch = useDispatch();
  const _user = useSelector((state) => state._user.currentUser);
  const getAllQuizes = () => {
    dispatch(getQuizes());
  };
  const _quizes = useSelector((state) => state._quizes.quizes);

  useEffect(() => {
    getAllQuizes();
  }, []);

  let attemptedQuiz = _user?.attemptCompleted
    ?.map((attempts) => attempts.quizId)
    .map((quizId) => _quizes.filter((value) => value._id === quizId));

  let scores = _user?.attemptCompleted?.reduce((acc, value) => {
    acc[value.quizId] = value.marks;
    return acc;
  }, {});

  attemptedQuiz = attemptedQuiz?.flat();

  return (
    <>
      <SideNav />
      <div className="wrapper">
        <div className="main_content">
          <div className="info">
            <table>
              <thead>
                <tr>
                  <th>Quiz Number</th>
                  <th>Quiz Title</th>
                  <th>Attempted</th>
                  <th>Quiz Result</th>
                  <th>Attempt Quiz</th>
                </tr>
              </thead>
              <tbody>
                {_quizes.length > 0
                  ? _quizes.map((quiz, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{quiz.quiz_name}</td>
                        <td>{attemptedQuiz?.includes(quiz) ? "Yes" : "No"}</td>
                        <td>
                          {scores[quiz._id]
                            ? scores[quiz._id].toFixed() + "%"
                            : "-"}
                        </td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to={`/Profile/quiz/${quiz._id}`}
                          >
                            Attempt
                          </Link>
                        </td>
                      </tr>
                    ))
                  : null}

                {/* <tr>
                  <td>2</td>
                  <td>Paper Quiz</td>
                  <td>No</td>
                  <td>--</td>
                  <td>
                    <Link className="btn btn-success" to={"/Quiz?{id}"}>
                      Attempt
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Paper</td>
                  <td>Yes</td>
                  <td>20/100</td>
                  <td>
                    <Link className="btn btn-success" to={"/Quiz?{id}"}>
                      Attempt
                    </Link>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default List;

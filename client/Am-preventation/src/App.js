import Register from "./app/login-pages/Register";
import "./App.scss";
import Login from "./app/login-pages/Login";
import Profile from "./app/user-details/ProfileDetails";
import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "./redux/user/user-actions";
import List from "./app/table/List";
import QNA from "./app/qna/qna";
import QuizList from "./app/quizList/quizList";
import CreateQuiz from "./app/createQuiz/createQuiz";
import Quiz from "./app/quiz/quiz";
import Course from "./app/course/course";
import CreateCourse from "./app/createCourse/createCourse";
import FAQ from "./app/faq/faq";
import CreateFaq from "./app/createFaq/createFaq";
const App = ({ history }) => {
  const dispatch = useDispatch();

  const _user = useSelector((state) => state._user);

  //On Add Quiz
  const addQuiz = () => {
    console.log("Adding Quiz");
  };

  //On SignOut button click
  const onSignOut = async () => {
    const response = await dispatch(userSignOut());
    if (response) history.push("/");
  };

  return (
    <div className="App">
      <nav className="navbar  navbar-light fixed-top">
        <div className="nav-head">
          <h3>
            <Link className="navbar-brand" to={"/Profile"}>
              <b>AM-Prevention</b>
            </Link>
          </h3>
        </div>
        <ul className="navbar-nav text">
          {/* If user is admin show him add Quiz */}

          {_user.currentUser ? (
            <li className="nav-item">
              <button className="btn btn-danger" onClick={onSignOut}>
                Sign out
              </button>
            </li>
          ) : null}
        </ul>
      </nav>

      <Switch>
        <Route
          exact
          path="/"
          component={_user.currentUser === null ? Login : Profile}
        />
        <Route path="/Login" component={Login} />
        <Route path="/Sign-up" component={Register} />
        {_user.currentUser ? (
          <Route exact path="/Profile" component={Profile} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/Courses" component={QuizList} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/Quizes" component={List} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/quiz/:id" component={Quiz} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/QNA" component={QNA} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/createQuiz" component={CreateQuiz} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/createCourse" component={CreateCourse} />
        ) : (
          <Redirect to="/" />
        )}
        {_user.currentUser ? (
          <Route exact path="/Profile/Courses/:id" component={Course} />
        ) : (
          <Redirect to="/" />
        )}

        {_user.currentUser ? (
          <Route exact path="/Profile/Faq" component={FAQ} />
        ) : (
          <Redirect to="/" />
        )}

        {_user.currentUser ? (
          <Route exact path="/Profile/createFaq" component={CreateFaq} />
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </div>
  );
};

export default withRouter(App);

import "./SideNav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideNav = () => {
  <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>;
  const _user = useSelector((state) => state._user);
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li>
              <Link to={"/Profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/Profile/Courses"}>Courses</Link>
            </li>
            <li>
              <a href="#">
                <Link to={"/Profile/Quizes"}>Quiz</Link>
              </a>
            </li>
            <li>
              <Link to={"/Profile/Faq"}>
                <i className="fas fa-project-diagram"></i>FAQ
              </Link>
            </li>
            <li>
              <Link to={"/Profile/QNA"}>
                <i className="fas fa-project-diagram"></i>QNA
              </Link>
            </li>
            
            {_user?.currentUser?.role === "admin" ? (
              <li>
                <Link to={"/Profile/createQuiz"}>
                  <i className="fas fa-project-diagram"></i>Create Quiz
                </Link>
              </li>
            ) : null}

            {_user?.currentUser?.role === "admin" ? (
              <li>
                <Link to={"/Profile/createCourse"}>
                  <i className="fas fa-project-diagram"></i>Create Course
                </Link>
              </li>
            ) : null}
            {_user?.currentUser?.role === "admin" ? (
              <li>
                <Link to={"/Profile/createFaq"}>
                  <i className="fas fa-project-diagram"></i>Create FAQ
                </Link>
              </li>
            ) : null}
          </ul>
          <div className="social_media">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideNav;

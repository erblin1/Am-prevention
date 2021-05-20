import "./quizList.scss";
import { Link } from "react-router-dom";
import SideNav from "../dashborad/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/course/course-actions";
import { useEffect } from "react";
function QuizList() {
  const dispatch = useDispatch();
  const _courses = useSelector((state) => state._courses);
  const fetchCourses = async () => {
    const response = await dispatch(getCourses());
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <SideNav />
      <div className="wrapper">
        <div className="main_content">
          <div className="info">
            <table>
              <thead>
                <tr>
                  <th>Course Number</th>
                  <th>Course Title</th>
                  {/* <th>Attempted</th> */}
                  {/* <th>Course Completed</th> */}
                  <th>Watch</th>
                </tr>
              </thead>
              <tbody>
                {_courses?.courses?.map((course, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{course.course_name}</td>
                    {/* <td>Yes</td> */}
                    {/* <td>87/100</td> */}
                    <td>
                      <Link
                        className="btn btn-success"
                        to={`/Profile/Courses/${course._id}`}
                      >
                        Watch Now
                      </Link>
                    </td>
                  </tr>
                ))}

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
export default QuizList;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userSignUp } from "../../redux/user/user-actions";
import "./Login.scss";
function Register({ history }) {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState();

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(userSignUp(userCredentials));
    if (response) history.push("Profile");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h4>Welcome</h4>
        <h6>Please Register to Continue</h6>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label></label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label></label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label></label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label></label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="Tel. Number"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox text-right">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="forgot-password" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 w-100 mt-1"
            block
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to={"/Login"}>sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);

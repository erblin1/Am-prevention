import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userSignIn } from "../../redux/user/user-actions";
import "./Login.scss";

const Login = ({ history }) => {
  const _user = useSelector((state) => state._user);
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState();

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(userSignIn(userCredentials));
    if (response) history.push("/Profile");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h4>Welcome</h4>
        <h6>Please Login to Continue</h6>
        <form onSubmit={onSubmit}>
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

          <div className="form-group ">
            <div className="custom-control custom-checkbox text-right">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label
                className="forgot-password text-right"
                htmlFor="customCheck1"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            // to={"/Profile"}
            className="btn btn-primary w-100 btn-space mt-1"
          >
            Log-in
          </button>
          <Link
            to={"/Sign-up"}
            className="btn btn-primary w-100 btn-space mt-1"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);

import React, {  useState, useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { login, clearErrors } from "../../actions/userAction";
import { useHistory, useLocation } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const redirect = location.search ? location.search.split("=")[1] : "/account";

  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);
  return (
    <>
      <Breadcrumbs pageName={"Login"} />
      <section className="login mt-5">
        <div className="container">
          <div className="row">
            <form onSubmit={loginSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                  shopcorner@example.com
                  shopcorner
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Pasword
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <Link to="/password/forgot">Forgot Password?</Link>
                </label>
               
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
import { useHistory } from "react-router-dom";
const ResetPassword= (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(props.match.params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password Updated Successfully");

      history.push("/login");
    }
  }, [dispatch, error, alert, history, success]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Change Password" />
          <div className="container mt-5">
            <h1 className="text-center">Reset Password</h1>
            <form action=""  onSubmit={resetPasswordSubmit}>
              <div className="mb-3 mt-3">
                <label for="exampleFormControlInput1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="exampleFormControlInput1" className="form-label">
                Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
             
              <input className="btn btn-outline-success" type="submit" />
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default ResetPassword;

import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
const UpdateUserPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Forgot Password" />
          <div className="container mt-5">
            <h1 className="text-center">Forgot Password</h1>
            <form
              action=""
              className="mt-5"
              onSubmit={forgotPasswordSubmit}
            >
              <div class="mb-3 mt-3" style={{ width: "50%", margin: "auto" }}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input class="btn btn-outline-success mt-3" type="submit" />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateUserPassword;

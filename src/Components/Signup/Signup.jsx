import "./signup.css";
import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { register, clearErrors } from "../../actions/userAction";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Signup = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const registerTab = useRef(null);

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    dispatch(register(myForm));
  };
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  const redirect = location.search ? location.search.split("=")[1] : "/account";

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
      <Breadcrumbs pageName={"Signup"} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="login mt-5">
            <div className="container">
              <div className="row">
                <form
                  action=""
                  ref={registerTab}
                  encType="multipart/form-data"
                  onSubmit={registerSubmit}
                >
                  <div
                    className="mb-3 pe-3 ps-3"
                    style={{ display: "inline-block", width: "50%" }}
                  >
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div
                    className="mb-3 pe-3 ps-3"
                    style={{ display: "inline-block", width: "50%" }}
                  >
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      value={name}
                      name="name"
                      onChange={registerDataChange}
                    />
                  </div>
                  <div
                    className="mb-3 pe-3 ps-3"
                    style={{ display: "inline-block", width: "50%" }}
                  >
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Pasword
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div
                    className="mb-3 pe-3 ps-3"
                    style={{ display: "inline-block", width: "50%" }}
                  >
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Avatar
                    </label>
                    <img src={avatarPreview} alt="Avatar Preview" />
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      name="avatar"
                      onChange={registerDataChange}
                    />
                   
                  </div>

                  <div className="mb-3 pe-3 ps-3">
                    <button type="submit" className="btn btn-primary">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Signup;

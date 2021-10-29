import React, {useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../../MetaData/MetaData";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import "./profile.css";
import {useHistory} from 'react-router-dom'
const Profile = () => {
    const history=useHistory()
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar} alt={user.name} />
              <Link to="/profile/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/profile/orders">My Orders</Link>
                <Link to="/profile/wishlist">My Wishlist</Link>

                <Link to="/profile/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
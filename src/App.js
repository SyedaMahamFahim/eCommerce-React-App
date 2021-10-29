import React, { useEffect } from "react";
import { loadUser } from "./actions/userAction";
import store from "./store";
import Header from "./Components/Header/Header";
import Config from "./configurations/Config";
import { useSelector } from "react-redux";
import './app.css'
import Footer from "./Components/Footer/Footer";
function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
// console.clear()
  return (
    <>
      <Header user={user} loading={loading} isAuthenticated={isAuthenticated} />
      <Config />
      <Footer/>
    </>
  );
}

export default App;

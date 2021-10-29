import React from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <section className="navbar mt-3">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <button
                className="navbar-offcanvas"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <FaBars />
              </button>

              <div
                className="offcanvas offcanvas-start about-sidebar-header"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header ">
                  <div className="container">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      About
                    </h5>
                  </div>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="container">
                    <p className="lead">
                      At ShopCorner, we put a strong emphasis on simplicity,
                      quality and usefulness of fashion products over other
                      factors. Our fashion items never get outdated. They are
                      not short-lived as normal fashion clothes. Some text as
                      placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </p>
                    <div className="sidebar-about-contact">
                      <Link to="/shop">contact@shopcorner.com</Link>
                      <h3>(+00) 123 567990</h3>
                      <div className="sidebar-about-social-icons">
                      <Link to="/face"><BsFacebook/></Link>
                      <Link to="/face"><FaInstagram/></Link>
                      <Link to="/face"><AiOutlineTwitter/></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-10">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    Shop Corner
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          to="/shop"
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Home
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="container mega-menu">
                            <div className="row">
                              <div className="col-3">
                                <ul>
                                  <li>Link</li>
                                  <li>Link</li>
                                  <li>Link</li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <ul>
                                  <li>Link</li>
                                  <li>Link</li>
                                  <li>Link</li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <ul>
                                  <li>Link</li>
                                  <li>Link</li>
                                  <li>Link</li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <img
                                  src="https://wokiee.reactdemo.hasthemes.com/assets/images/promo/index-promo-img-02.jpg"
                                  alt=""
                                  width="auto"
                                  height="300px"
                                />
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

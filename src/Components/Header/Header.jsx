import React from 'react'
import { Topheader } from './TopHeader/Topheader'
import './header.css'
import { GoPerson } from 'react-icons/go';
import { AiFillHeart } from 'react-icons/ai';
import { BiBasket } from 'react-icons/bi';
import Navbar from './Navbar/Navbar';
const Header = () => {
    return (
        <>
            <Topheader />
            <section className="header mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-2 mt-2">
                            <img src="https://multikart-react.vercel.app/assets/images/icon/logo.png" alt="" />
                        </div>
                        <div className="col-7 mt-2">
                            <form class="d-flex">
                                <input className="form-control input-xxlarge me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-1">
                            <div class="dropdown">
                                <button className="header-drop-down" data-bs-toggle="dropdown" aria-expanded="false">
                                    <AiFillHeart />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div class="dropdown">
                                <button className="header-drop-down" data-bs-toggle="dropdown" aria-expanded="false">
                                    <GoPerson />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div class="dropdown">
                              
                                <button className="header-drop-down"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BiBasket /></button>
                                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                                    </div>
                                    <div className="offcanvas-body">
                                        ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <Navbar />
        </>
    )
}

export default Header

import React from 'react'
import './navbar.css'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <section className="navbar mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <button className='navbar-offcanvas' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <FaBars />
                            </button>

                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div>
                                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                    </div>
                                    <div class="dropdown mt-3">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                          <img src="https://wokiee.reactdemo.hasthemes.com/assets/images/promo/index-promo-img-02.jpg" alt="" width="auto" height="300px"/>
                      </div>
                  </div>
              </div>
           
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
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
    )
}

export default Navbar

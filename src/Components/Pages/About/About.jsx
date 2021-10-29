import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import "./about.css";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial/Testimonial";
import TestimonialData from "./Testimonial/TestimonialData";
import BrandData from "./BrandData";
import Brands from "./Brands/Brands";
const About = () => {
  return (
    <>
      <Breadcrumbs pageName={"About"} />
      <div className="container mt-5">
        <div className="row">
          <div className="about-top text-center">
            <p className="lead">SIMPLY OR WHITE</p>
            <h3 className="mt-4">Clever & unique ideas</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
              suscipit sagittis leo sit met condimentum estibulum is Suspe
              ndisse suscipit sagittis leo sit met condimentum estibulorem ipsum
              dolor sit amet, consectetur cing elit.
            </p>
          </div>
          <div className="about-video mt-5">
            <video
              className="video-abt"
              controls
              poster="http://lezada.reactdemo.hasthemes.com/assets/images/backgrounds/about-video-bg.png"
            >
              <source
                src="https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="about-content container mt-5">
            <div className="row">
              <div className="about-col">
                <div className="about-details">
                  <h5>Addrss</h5>
                  <p className="lead">
                    1800 Abbot Kinney Blvd. Unit D & E Venice
                  </p>
                </div>

                <div className="about-details">
                  <h5 className="mt-4">PHONE</h5>
                  <p className="lead">Mobile: (+88) – 1990</p>
                </div>
                <div className="about-details">
                  <h5 className="mt-4">EMAIL</h5>
                  <p className="lead">shopcorner@gmail.com</p>
                </div>
              </div>
              <div className="about-col">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                  ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum
                  dolor sit amet, consectetur cing elit. ipsum dolor sit amet,
                  consectetur cing elit. Suspe ndisse suscipit sagittis leo sit
                  es
                </p>
                <button type="button" className="btn btn-dark btn-lg mt-3">
                  <Link to="/shop">Shop</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonoal mt-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center mt-4">Testimonial</h1>

            <section className="bark-slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  {TestimonialData.map((value, index) => {
                    return (
                      <>
                        <Testimonial testimonial={value} key={index} />
                      </>
                    );
                  })}
                  {/* <Testimonial /> */}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
            <h1 className="about-brand-title text-center">
              Our Brands
           </h1>
                <div className="all-brands">
                    {
                        BrandData.map((brand)=>(
                        <>
                        <Brands key={brand.id} brand={brand}/>
                        </>
                        ))
                    }
                    
                </div>
           
        </div>
      </div>
    </>
  );
};

export default About;

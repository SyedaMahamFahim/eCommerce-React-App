import React from "react";
import { GrLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdStopwatch } from "react-icons/io";
import "./contact.css";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
const Contact = () => {
  return (
    <>
   <Breadcrumbs pageName={"Contact"} />
      <div className="contactpage-titles">
        <h5 className="contactpage-sub-title">COME HAVE A LOOK</h5>
        <h1 className="contactpage-title">Contact detail</h1>
      </div>
      <div className="contactpage-info">
        <div className="contact-address-info">
          <div className="contact-icons">
            {" "}
            <GrLocation />
          </div>
          <div className="contact-content">
            <h5 className="contact-content-titles">ADDRESS</h5>
            <p> 1800 Abbot Kinney Blvd. Unit D & E Venice</p>
          </div>
        </div>
        <div className="contact-address-info">
          <div className="contact-icons">
            {" "}
            <BiPhoneCall />
            <AiOutlineMail />
          </div>

          <div className="contact-content">
            <h5 className="contact-content-titles">Quick Contact</h5>
            <p> Mobile: (+88) – 1990 – 6886 Hotline: 1800 – 1102</p>
            <p> contact@shopcorner.com</p>
          </div>
        </div>
        <div className="contact-address-info">
          <div className="contact-icons">
            {" "}
            <IoMdStopwatch />
          </div>
          <div className="contact-content">
            <h5 className="contact-content-titles">Time Of Operation</h5>
            <p>
              {" "}
              Monday – Friday : 09:00 – 20:00 Sunday & Saturday: 10:30 – 22:00
            </p>
          </div>
        </div>
      </div>

      <div className="contactpage-titles">
        <h1 className="contactpage-title">Get In Touch</h1>
      </div>
      <section className="contact-form-section">
        <form action="" className="contact-form">
          <input
            type="text"
            name=""
            id="fname"
            placeholder="First Name"
            class="form_design"
            required
          />
          <input
            type="text"
            name=""
            id="lname"
            placeholder="Last Name"
            class="form_design"
            required
          />{" "}
          <br />
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email"
            class="form_design"
            required
          />
          <input
            type="tel"
            name=""
            id="phone-number"
            placeholder="Phone Number"
            class="form_design"
            required
          />{" "}
          <br />
          <textarea
            name="message"
            id="message"
            class="form_design"
            required
          ></textarea>
          <br />
          <input type="submit" value="Submit" class="submit-btn-block" />
        </form>
      </section>
      {/* <section className="map">
                <MapContainer />
            </section> */}
    </>
  );
};
export default Contact;
import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../../actions/cartAction";
import { useHistory,Link } from "react-router-dom";
import { Country, State } from "country-state-city";
import Loader from '../../Loader/Loader'
import {MdRemoveShoppingCart} from 'react-icons/md'

const PersonalInformation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo,cartItems } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 12 ) {
      alert.error("Kindly,enter a valid phone number");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    history.push("/order/confirm");
  };
  return (
    <>
     {
       loading?<Loader/>:(
         <>
       {
         cartItems.length===0?(
<>
<div className="container mt-5">
          <div className="row mt-5">
            <div className="emptyCart text-center">
              <MdRemoveShoppingCart className="empty-cart-icon"/>

              <h1>No Product in Your Cart</h1>
              <button className="btn btn-dark header-cart-btn mt-3" type="button">
                <Link to="/shop" className="header-btn-links">
                  {" "}
                  View Shop{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
</>
         ):(
           <>
            <div className="container mt-5">
        <main>
          <div className="row ">
            <div className="col">
              <h4 className="mb-3">Billing address</h4>
              <form
                className="needs-validation"
                noValidate
                encType="multipart/form-data"
                onSubmit={shippingSubmit}
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder
                      defaultValue
                      required
                      value={user.name}
                    />
                    <div className="invalid-feedback">
                      User name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="lastName"
                      placeholder
                      defaultValue
                      required
                      value={user.email}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      id="country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Country</option>
                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
  

                    <select
                      required
                      className="form-select" id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="" className="form-select" id="state">
                        State
                      </option>
                      {!country ? (
                        <>
                          <option value="">
                            Kindly,select the country to select the state
                          </option>
                        </>
                      ) : (
                        <>
                          {State &&
                            State.getStatesOfCountry(country).map((item) => (
                              <option key={item.isoCode} value={item.isoCode}>
                                {item.name}
                              </option>
                            ))}
                        </>
                      )}
                    </select>

                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="zip" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder
                      required
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="tel" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      placeholder
                      required
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Phone Number is required.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="tel" className="form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      placeholder="Optional"
                    />
                   
                  </div>
                </div>

                <button className=" btn btn-primary btn-lg mt-5" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
           </>
         )
       }
         
         </>
       )
     }
    </>
  );
};

export default PersonalInformation;

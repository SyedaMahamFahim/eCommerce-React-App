import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Login from "../Components/Login/Login";
import Product from "../Components/Product/Product";
import Shop from "../Components/Shop/Shop";
import Signup from "../Components/Signup/Signup";
import Home from "../Components/Home/Home";
import SearchResult from "../Components/SearchResult/SearchResult";
import Profile from "../Components/Users/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import UpdateUserProfile from "../Components/Users/UpdateUserProfile/UpdateUserProfile";
import UpdateUserPassword from "../Components/Users/UpdateUserPassword/UpdateUserPassword";
import ForgotPassword from "../Components/Users/ForgotPassword/ForgotPassword";
import ResetPassword from "../Components/Users/ResetPassword/ResetPassword";
import ConfirmOrder from "../Components/Checkout/ConfirmOrder/ConfirmOrder";
import PersonalInformation from "../Components/Checkout/Shipping/PersonalInformation";
import BillingInfo from "../Components/Checkout/BillingInfo/BillingInfo";
import OrderSuccess from "../Components/Checkout/OrderSuccess/OrderSuccess";
import MyOrders from "../Components/Users/Orders/MyOrders";
import OrderDetail from "../Components/Users/OrderDetail/OrderDetail";
import MyWishlist from "../Components/Users/Wishlists/MyWishlist";
import CompareProduct from "../Components/CompareProduct/CompareProduct";
import AdminProductList from "../Components/Admin/AdminProductList/AdminProductList";
import Dashboard from "../Components/Admin/Dashboard/Dashboard";
import NewProduct from "../Components/Admin/NewProduct/NewProduct";
import UpdateProduct from "../Components/Admin/UpdateProduct/UpdateProduct";
import ShippingPolicy from "../Components/Pages/ShippingPolicy/ShippingPolicy";
import ReturnPolicy from "../Components/Pages/ReturnPolicy/ReturnPolicy";
import Contact from "../Components/Pages/Contact/Contact";
import Faqs from "../Components/Pages/Faqs/Faqs";
import About from "../Components/Pages/About/About";
const Config = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/product/:id" component={Product} exact />
        <Route path="/search-result/:keyword" component={SearchResult} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/wishlists" component={MyWishlist} />
        <Route exact path="/compare-products" component={CompareProduct} />
        <Route exact path="/policies/shipping-policy" component={ShippingPolicy} />
        <Route exact path="/policies/return-policy" component={ReturnPolicy} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/about" component={About} />
{/* For Auth Users */}
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/orders" component={MyOrders} />
        <ProtectedRoute
          exact
          path="/profile/update"
          component={UpdateUserProfile}
        />
        <ProtectedRoute
          exact
          path="/profile/password/update"
          component={UpdateUserPassword}
        />
        <ProtectedRoute
          exact
          path="/shipping"
          component={PersonalInformation}
        />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoute exact path="/process/payment" component={BillingInfo} />
        <ProtectedRoute exact path="/order/success" component={OrderSuccess} />
        <ProtectedRoute
          exact
          path="/profile/order/:id"
          component={OrderDetail}
        />

        {/* FOR ADMIN ROUTES */}
        <ProtectedRoute
          exact
          path="/admin/dashboard"
          isAdmin={true}
          component={Dashboard}
        />
          <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={AdminProductList}
        />
             <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
          <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
      </Switch>
    </>
  );
};

export default Config;


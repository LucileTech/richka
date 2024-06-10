import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Business from "./components/Business";
import BusinessHome from "./components/Business/BusinessHome";
import BusinessAbout from "./components/Business/BusinessAbout";
import BusinessSupport from "./components/Business/BusinessSupport";

import Process from "./components/Process";
import ShopAll from "./components/ShopAll";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <Products />
          <About />
          <Business />
          <Process />
          <ShopAll />
          <Reviews />
        </Route>
        <Route path="/business">
          <BusinessHome />
          <BusinessAbout />
          <BusinessSupport />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

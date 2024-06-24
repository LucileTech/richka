import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./index.css";
import React from "react";
// Header
import Header from "./components/Header";
// Home Page
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Process from "./components/Process";
import ShopAll from "./components/ShopAll";
import Reviews from "./components/Reviews";
import Business from "./components/Business";
// Business Page
import BusinessHome from "./components/Business/BusinessHome";
import BusinessAbout from "./components/Business/BusinessAbout";
import BusinessSupport from "./components/Business/BusinessSupport";
import BenefitsOfJoining from "./components/Business/BenefitsOfJoining";
import VideoComponent from "./components/VideoComponent";
import BusinessDescription from "./components/Business/BusinessDescription";
// Form
import ProfessionnalApplication from "./components/ProfessionnalApplication";
// Learn More about Teas Page
import TeasHome from "./components/Teas/TeasHome";
import TeasDescription from "./components/Teas/TeasDescription";
import AboutTeas from "./components/Teas/AboutTeas";
import EffectSelectors from "./components/Teas/EffectSelectors";
import CraftTeas from "./components/Teas/CraftTeas";
import ShopTeas from "./components/Teas/ShopTeas";

// Oils
import OilsHome from "./components/Oils/OilsHome";
import OilsDescription from "./components/Oils/OilsDescription";
import AboutOils from "./components/Oils/AboutOils";
import OilProduction from "./components/Oils/OilProduction";

// Footer
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
          <BusinessDescription />
          <BenefitsOfJoining />
          <BusinessAbout />
          <VideoComponent />
          <BusinessSupport />
        </Route>
        <Route path="/proform">
          <ProfessionnalApplication />
        </Route>
        <Route path="/teas">
          <TeasHome />
          <TeasDescription />
          <AboutTeas />
          <EffectSelectors />
          <CraftTeas />
          <VideoComponent />
          <ShopTeas />
        </Route>
        <Route path="/oils">
          <OilsHome />
          <OilsDescription />
          <AboutOils />
          <OilProduction />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

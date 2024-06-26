import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import ReactLoading from "react-loading";

import "./App.css";
import "./index.css";

// Header and Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const Products = lazy(() => import("./components/Products"));
const About = lazy(() => import("./components/About"));
const Process = lazy(() => import("./components/Process"));
const ShopAll = lazy(() => import("./components/ShopAll"));
const Reviews = lazy(() => import("./components/Reviews"));
const Business = lazy(() => import("./components/Business"));
const BusinessHome = lazy(() => import("./components/Business/BusinessHome"));
const BusinessAbout = lazy(() => import("./components/Business/BusinessAbout"));
const BusinessSupport = lazy(
  () => import("./components/Business/BusinessSupport")
);
const BenefitsOfJoining = lazy(
  () => import("./components/Business/BenefitsOfJoining")
);
const VideoComponent = lazy(() => import("./components/VideoComponent"));
const BusinessDescription = lazy(
  () => import("./components/Business/BusinessDescription")
);
const ProfessionnalApplication = lazy(
  () => import("./components/ProfessionnalApplication")
);
const TeasHome = lazy(() => import("./components/Teas/TeasHome"));
const TeasDescription = lazy(() => import("./components/Teas/TeasDescription"));
const AboutTeas = lazy(() => import("./components/Teas/AboutTeas"));
const EffectSelectors = lazy(() => import("./components/Teas/EffectSelectors"));
const CraftTeas = lazy(() => import("./components/Teas/CraftTeas"));
const ShopTeas = lazy(() => import("./components/Teas/ShopTeas"));
const OilsHome = lazy(() => import("./components/Oils/OilsHome"));
const OilsDescription = lazy(() => import("./components/Oils/OilsDescription"));
const AboutOils = lazy(() => import("./components/Oils/AboutOils"));
const OilProduction = lazy(() => import("./components/Oils/OilProduction"));

const Register = lazy(() => import("./pages/Register.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader">
            <ReactLoading
              type={"bars"}
              color={"#aeafa9"}
              height={100}
              width={100}
            />
          </div>
        }
      >
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
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

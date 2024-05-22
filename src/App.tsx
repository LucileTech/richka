import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Business from "./components/Values";
import Process from "./components/Process";
import ShopAll from "./components/ShopAll";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Products></Products>
      <About></About>
      <Business></Business>
      <Process></Process>
      <ShopAll></ShopAll>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
}

export default App;

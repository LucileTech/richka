import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Description from "./components/Description";
import About from "./components/About";
import Values from "./components/Values";
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
      <Description></Description>
      <About></About>
      <Values></Values>
      <Process></Process>
      <ShopAll></ShopAll>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
}

export default App;

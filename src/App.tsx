import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Home";
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
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Wellness at Your Fingertips</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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

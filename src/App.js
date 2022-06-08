import "./App.css";
import { Nav } from "./components/Nav/Nav";
 

import { Home } from "../src/page/Home";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./page/Cart";
import { SaveToLater } from "./page/SaveToLater";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <Toaster />
    <div className="App">
      <Nav />
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route  path="/later" element={<SaveToLater/>} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Allergy from "./Pages/Allergy";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Service from "./Pages/Service";
import LogIn from "./Auth/LogIn";
import Home from "./Pages/Home";
import SignUp from "./Auth/SignUp";
import Navigation from "./NavBar/Navigation";
import Cart from "./Pages/Cart"
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allergy" element={<Allergy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/menu/productDescription/:id"
          element={<ProductDescription />}
        />
      </Routes>
    </div>
  );
}

export default App;

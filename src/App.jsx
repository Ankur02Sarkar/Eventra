import Product from "./pages/Product";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Birthday from "./pages/Birthday";
import Aniversary from "./pages/Aniversary";
import Meetup from "./pages/Meetup";
import ProductCard from "./pages/ProductCard";
import Cakes from "./pages/Cakes";
import { ShoppingCartProvider } from "./context/Cart";
import Flowers from "./pages/Flowers";
import Gifts from "./pages/Gifts";
import ServiceCard from "./pages/ServiceCard";
import Nav from "./components/Nav"
function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/cakes" element={<Cakes />} />
          <Route path="/products/flowers" element={<Flowers />} />
          <Route path="/products/gifts" element={<Gifts />} />
          <Route path="/services/birthdays" element={<Birthday />} />
          <Route path="/services/anniversaries" element={<Aniversary />} />
          <Route path="/services/meetups" element={<Meetup />} />
          <Route path="/producttypes" element={<ProductCard />} />
          <Route path="/servicetypes" element={ <ServiceCard/> } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;

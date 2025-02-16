import "./App.css"
import ProductList from "./pages/ProductsList"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductsDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"
import ContactUs from "./pages/ContactUs"
import ContactUs2 from "./pages/ContactUs2"
import ReviewForm from "./pages/ReviewForm"
import { useNavigate } from "react-router-dom"
import Checkout from "./pages/Checkout"
import OrdersDetails from "./pages/OrdersDetails"

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(false)

  const logOut = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    setUser(null)
    navigate("/")
  }

  return (
    <>
      <h1>Hello, World!</h1>
      <header>
        <Nav user={user} logOut={logOut} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact-us2" element={<ContactUs2 />} />
        <Route path="/review/:id" element={<ReviewForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders/:id" element={<OrdersDetails />} />
      </Routes>
    </>
  )
}

export default App

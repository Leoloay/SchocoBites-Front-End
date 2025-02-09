import "./App.css"
import ProductList from "./pages/ProductsList"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductsDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

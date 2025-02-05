import "./App.css"
import axios from "axios"
import { useState, Component } from "react"
import { login } from "./services/auth"
import ProductList from "./pages/ProductsList"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductsDetails"
import Login from "./pages/Login"

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
      </Routes>
    </>
  )
}

export default App

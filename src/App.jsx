import "./App.css"
import axios from "axios"
import { useState, Component } from "react"
import { login } from "./services/auth"
import ProductList from "./pages/ProductsList"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  )
}

export default App

import axios from "axios"
import { useState } from "react"
import API, { postProducts } from "../services/api"

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category: "",
    image: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // axios.post("http://localhost:8000/api/products/add/", product)
      setProduct({
        name: "",
        price: "",
        description: "",
        stock: "",
        category: "",
        image: "",
      })
    } catch (error) {
      console.error("Error adding product:", error)
      console.log(error)
    }
  }
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={product.name}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="price"
      >
        Price
      </label>
      <input
        type="text"
        id="price"
        name="price"
        value={product.price}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={product.description}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      ></textarea>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="category"
      >
        Category
      </label>
      <input
        type="text"
        id="category"
        name="category"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="stock"
      >
        Stock
      </label>
      <input
        type="text"
        id="stock"
        name="stock"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="image"
      >
        Image
      </label>
      <input
        type="file"
        id="image"
        name="image"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Product
      </button>
    </form>
  )
}
export default ProductForm

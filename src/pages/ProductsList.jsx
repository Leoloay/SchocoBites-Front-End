import { useState, useEffect } from "react"
import API from "../services/api"
import { Link } from "react-router-dom"
import { getProducts } from "../services/productsService"

const ProductsList = () => {
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   API.get("/products/")
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error("Error fetching products:", error))
  // }, [])

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getProducts()
      console.log(data)
      setProducts(data)
    }
    getAllProducts()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">
                  BHD {product.price}
                </span>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList

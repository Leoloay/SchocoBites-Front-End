import { NavLink, useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductById } from "../services/productsService"
import { getReviewsByProduct } from "../services/reviewService"
// import API from "../services/api"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState(null)

  // useEffect(() => {
  //   API.get(`/products/${id}`)
  //     .then((response) => setProduct(response.data))
  //     .catch((error) => console.error("Error fetching product details:", error))
  // }, [id])

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id)
      setProduct(product)
    }

    const getReviews = async () => {
      const review = await getReviewsByProduct(id)
      console.log(review)

      setReviews(review)
    }

    getProduct()
    getReviews()
  }, [id])

  if (!product) return <h1>Loading...</h1>
  if (!reviews) return <h1>No reviews</h1>

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-extrabold text-gray-900 mt-6">
        {product.name}
      </h1>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-xl font-bold text-gray-900 mt-4">
        BHD {product.price}
      </p>
      <div>
        <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition mt-4">
          Add to Cart
        </button>
        {
          <Link to={`/review/` + id}>
            <button
              // onClick={"#"}
              className="bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition mt-4 ml-4"
            >
              Add a Review
            </button>
          </Link>
        }
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mt-6">
          Customer Reviews
        </h1>
        {reviews.map((review) => (
          <>
            <p className="text-gray-600 mt-4"> Review: {review.review}</p>
            <p className="text-xl font-bold text-gray-900 mt-4">
              Rating: {review.rating} / 5
            </p>
          </>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails

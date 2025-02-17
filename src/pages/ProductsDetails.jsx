import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductById } from "../services/productsService"
import { getReviewsByProduct, deleteReview } from "../services/reviewService"
// import API from "../services/api"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])
  const [message, setMessage] = useState("")
  const [userId, setUserId] = useState(null)

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

    // const EditReview = async () => {
    //   const review = await
    // }

    getProduct()
    getReviews()

    const storedUserId = Number(localStorage.getItem("user_id"))
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [id])

  const addToCart = () => {
    if (!product) return

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    alert(`${product.name} added to cart!`)
  }

  const handleDeleteReview = async (reviewId) => {
    const token = localStorage.getItem("accessToken")
    if (!token) {
      setMessage("You must be logged in to delete a review.")
      return
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    )
    if (!confirmDelete) return

    const response = await deleteReview(reviewId, token)
    if (response.error) {
      setMessage(response.error)
    } else {
      setReviews(reviews.filter((review) => review.id !== reviewId))
      setMessage("Review deleted successfully.")
    }
  }

  if (!product) return <h1>Loading...</h1>

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
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition mt-4"
        >
          Add to Cart
        </button>
        <Link to={`/review/${id}`}>
          <button className="bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition mt-4 ml-4">
            Add a Review
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mt-6">
          Customer Reviews
        </h1>

        {message && (
          <div
            className={`mt-4 px-4 py-2 text-center rounded-lg ${
              message.includes("success")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b py-4">
              <p className="text-gray-600 mt-4">Review: {review.review}</p>
              <p className="text-xl font-bold text-gray-900 mt-4">
                Rating: {review.rating} / 5
              </p>
              {Number(localStorage.getItem("user_id")) === review.user && (
                <div className="flex gap-2 mt-4">
                  <Link
                    to={`/reviews/${review.id}`}
                    className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Edit Review
                  </Link>
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    className="bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
                  >
                    Delete Review
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  )
}

export default ProductDetails

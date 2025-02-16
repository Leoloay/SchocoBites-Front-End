import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProductById } from "../services/productsService"
import { createReview } from "../services/reviewService"

const initialFormData = {
  rating: "",
  review: "",
}

const ReviewForm = ({ user }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [message, setMessage] = useState("")
  const [reviewForm, setReviewForm] = useState({
    ...initialFormData,
    product: id,
    user: user?.id || "",
  })

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const token = localStorage.getItem("accessToken")

      if (!token) {
        setMessage("You must be logged in to submit a review.")
        return
      }
      const data = await createReview(reviewForm, token)
      if (data) {
        if (data.error) {
          setMessage({ msg: data.error })
        } else {
          setMessage({
            msg: "Review Submitted Successfully",
          })
          setReviewForm(initialFormData)
          navigate("/products/")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setReviewForm({ ...reviewForm, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id)
      setProduct(product)
    }
    getProduct()
  }, [id])

  if (!product) return <h1>Loading...</h1>

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
            Review of {product.name}
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block text-sm font-bold text-gray-900">
              Rating:
            </label>
            <input
              className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
              type="number"
              name="rating"
              min={1}
              max={5}
              placeholder="Enter your rating here out of 5"
              value={reviewForm.rating}
              onChange={handleChange}
            />
            <label className="block text-sm font-bold text-gray-900">
              Review:
            </label>
            <textarea
              className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
              type="text"
              name="review"
              placeholder="Write your feedback"
              value={reviewForm.review}
              onChange={handleChange}
            />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
                type="submit"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ReviewForm

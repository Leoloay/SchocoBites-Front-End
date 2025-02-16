import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getReviewById, updateReview } from "../services/reviewService"

const EditReview = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [reviewData, setReviewData] = useState({ rating: "", review: "" })
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchReview = async () => {
      const review = await getReviewById(id)
      if (review)
        setReviewData({ rating: review.rating, review: review.review })
    }
    fetchReview()
  }, [id])

  const handleChange = (event) => {
    setReviewData({ ...reviewData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedReview = await updateReview(id, reviewData)
    if (updatedReview.error) {
      setMessage(updatedReview.error)
    } else {
      setMessage("Review updated successfully!")
      navigate(-1)
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Edit Your Review
      </h2>

      {message && (
        <div
          className={`mb-4 px-4 py-2 text-center rounded-lg ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Rating:</label>
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            value={reviewData.rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Review:</label>
          <textarea
            name="review"
            value={reviewData.review}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none h-24"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Update Review
        </button>
      </form>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-200"
      >
        Cancel
      </button>
    </div>
  )
}

export default EditReview

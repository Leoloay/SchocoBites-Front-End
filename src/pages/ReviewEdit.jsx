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
    <div>
      <h2>Edit Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          value={reviewData.rating}
          onChange={handleChange}
        />
        <label>Review:</label>
        <textarea
          name="review"
          value={reviewData.review}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Review</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default EditReview

import client from "./config"

// Fetch all reviews for a product
export const getReviewsByProduct = async (productId) => {
  try {
    const response = await client.get(`/reviews/?product=${productId}`)
    return response.data
  } catch (error) {
    console.error(
      "Error fetching reviews:",
      error.response?.data || error.message
    )
    return []
  }
}

// Create a new review
export const createReview = async (reviewData) => {
  try {
    const response = await client.post("/reviews/", reviewData)
    return response.data
  } catch (error) {
    console.error(
      "Error creating review:",
      error.response?.data || error.message
    )
    return null
  }
}

// Update a review
export const updateReview = async (reviewId, reviewData) => {
  try {
    const response = await client.put(`/reviews/${reviewId}/`, reviewData)
    return response.data
  } catch (error) {
    console.error(
      "Error updating review:",
      error.response?.data || error.message
    )
    return null
  }
}

// Delete a review
export const deleteReview = async (reviewId) => {
  try {
    await client.delete(`/reviews/${reviewId}/`)
  } catch (error) {
    console.error(
      "Error deleting review:",
      error.response?.data || error.message
    )
  }
}

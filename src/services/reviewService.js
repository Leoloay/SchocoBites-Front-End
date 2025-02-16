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

// Fetch a single review by ID
export const getReviewById = async (id) => {
  try {
    const response = await client.get(`/reviews/${id}/`)
    return response.data
  } catch (error) {
    console.error(
      "Error fetching review:",
      error.response?.data || error.message
    )
    return null
  }
}

// Create a new review
export const createReview = async (reviewData, token) => {
  try {
    const response = await client.post("/reviews/", reviewData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    console.error(
      "Error creating review:",
      error.response?.data || error.message
    )
    return { error: error.response?.data || "Failed to create review" }
  }
}

// Update a review
export const updateReview = async (reviewId, reviewData, token) => {
  try {
    const response = await client.put(`/reviews/${reviewId}/`, reviewData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    console.error(
      "Error updating review:",
      error.response?.data || error.message
    )
    return { error: error.response?.data || "Failed to update review" }
  }
}

// Delete a review
export const deleteReview = async (reviewId, token) => {
  try {
    await client.delete(`/reviews/${reviewId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return { success: true }
  } catch (error) {
    console.error(
      "Error deleting review:",
      error.response?.data || error.message
    )
    return { error: error.response?.data || "Failed to delete review" }
  }
}

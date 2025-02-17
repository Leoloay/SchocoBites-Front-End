import client from "./config"

// Fetch all order items
export const getOrderItems = async () => {
  try {
    const response = await client.get("/order-items/")
    return response.data
  } catch (error) {
    console.error(
      "Error fetching order items:",
      error.response?.data || error.message
    )
    return []
  }
}

// Fetch order items by order ID
export const getOrderItemsByOrder = async (orderId) => {
  try {
    const response = await client.get(`/orderItems/?order=${orderId}`)
    return response.data
  } catch (error) {
    console.error(
      "Error fetching order items for order:",
      error.response?.data || error.message
    )
    return []
  }
}

// Fetch a single order item by ID
export const getOrderItemById = async (itemId) => {
  try {
    const response = await client.get(`/orderItems/${itemId}/`)
    return response.data
  } catch (error) {
    console.error(
      "Error fetching order item:",
      error.response?.data || error.message
    )
    return null
  }
}

// Create a new order item
export const createOrderItem = async (orderItemData, token) => {
  try {
    const response = await client.post("/orderItems/", orderItemData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    console.error(
      "Error creating order item:",
      error.response?.data || error.message
    )
    return { error: error.response?.data || "Failed to create order item" }
  }
}

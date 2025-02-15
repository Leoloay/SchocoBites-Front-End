import client from "./config"

// Fetch all orders
export const getOrders = async () => {
  try {
    const response = await client.get("/orders/")
    return response.data
  } catch (error) {
    console.error(
      "Error fetching orders:",
      error.response?.data || error.message
    )
    return []
  }
}

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await client.post("/orders/", orderData)
    return response.data
  } catch (error) {
    console.error(
      "Error creating order:",
      error.response?.data || error.message
    )
    return null
  }
}

// Fetch a single order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await client.get(`/orders/${orderId}/`)
    return response.data
  } catch (error) {
    console.error(
      "Error fetching order:",
      error.response?.data || error.message
    )
    return null
  }
}

// Update an order (status, payment, etc.)
export const updateOrder = async (orderId, orderData) => {
  try {
    const response = await client.put(`/orders/${orderId}/`, orderData)
    return response.data
  } catch (error) {
    console.error(
      "Error updating order:",
      error.response?.data || error.message
    )
    return null
  }
}

// Cancel/Delete an order
export const deleteOrder = async (orderId) => {
  try {
    await client.delete(`/orders/${orderId}/`)
  } catch (error) {
    console.error(
      "Error deleting order:",
      error.response?.data || error.message
    )
  }
}

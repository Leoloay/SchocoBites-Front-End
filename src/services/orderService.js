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

// Create a new order
export const createOrder = async (orderData, token) => {
  try {
    const response = await client.post("/orders/", orderData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    console.error(
      "Error creating order:",
      error.response?.data || error.message
    )
    return { error: error.response?.data || "Failed to create order" }
  }
}

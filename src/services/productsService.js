import client from "./config"

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await client.get("/products/")
    return response.data
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    )
    return []
  }
}

// Create a new product
export const createProduct = async (product) => {
  try {
    const response = await client.post("/products/", product)
    return response.data
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    )
    return null
  }
}

// Fetch product by ID
export const getProductById = async (productId) => {
  try {
    const response = await client.get(`/products/${productId}/`)
    return response.data
  } catch (error) {
    console.error(
      "Error fetching product:",
      error.response?.data || error.message
    )
    return null
  }
}

// Update a product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await client.put(`/products/${productId}/`, productData)
    return response.data
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response?.data || error.message
    )
    return null
  }
}

// Delete a product
export const deleteProduct = async (productId) => {
  try {
    await client.delete(`/products/${productId}/`)
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    )
  }
}

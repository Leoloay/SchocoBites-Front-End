import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export const getProducts = async () => {
  try {
    const response = await API.get("/products/")
    return response.data
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export const postProducts = async (product) => {
  try {
    await API.post("/products/", product)
  } catch (error) {
    console.error("Error posting product:", error)
  }
}

export default API

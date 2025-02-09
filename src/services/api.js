import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Automatically attach JWT token to requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Fetch products
export const getProducts = async () => {
  try {
    const response = await API.get("/products/")
    return response.data
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    )
    return []
  }
}

// ADD a product
export const postProduct = async (product) => {
  try {
    const response = await API.post("/products/", product)
    return response.data
  } catch (error) {
    console.error(
      "Error posting product:",
      error.response?.data || error.message
    )
    return null
  }
}

// Log in and get JWT tokens
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8000/login/", {
      username,
      password,
    })

    const { access, refresh } = response.data
    localStorage.setItem("accessToken", access)
    localStorage.setItem("refreshToken", refresh)

    return response.data
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message)
    return null
  }
}

// Refresh JWT token (if expired)
export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem("refreshToken")
    if (!refresh) return null

    const response = await axios.post("http://localhost:8000/refresh/", {
      refresh,
    })

    localStorage.setItem("accessToken", response.data.access)
    return response.data.access
  } catch (error) {
    console.error(
      "Token refresh failed:",
      error.response?.data || error.message
    )
    return null
  }
}

// Function to log out
export const logoutUser = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}

export default API

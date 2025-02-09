import client from "./config"

// Login user and get JWT tokens
export const loginUser = async (username, password) => {
  try {
    const response = await client.post("/login/", { username, password })
    const { access, refresh } = response.data
    localStorage.setItem("accessToken", access)
    localStorage.setItem("refreshToken", refresh)

    return response.data
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message)
    return null
  }
}

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await client.post("/register/", userData)
    return response.data
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message)
    return null
  }
}

// Refresh JWT token
export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem("refreshToken")
    if (!refresh) return null

    const response = await client.post("/refresh/", { refresh })
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

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}

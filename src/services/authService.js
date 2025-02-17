import client from "./config"

// Login user and get JWT tokens
export const loginUser = async (username, password) => {
  try {
    const response = await client.post("/token/", { username, password })
    const { access, refresh } = response.data
    localStorage.setItem("accessToken", access)
    localStorage.setItem("refreshToken", refresh)

    const userData = await client.get("/users/", {
      headers: { Authorization: `Bearer ${access}` },
    })

    const user = userData.data?.[0]
    const user_id = user?.id

    if (user_id) {
      localStorage.setItem("user_id", user_id)
    }

    return { ...response.data, user_id }
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message)
    return null
  }
}

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await client.post("user/register/", userData)
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

    const response = await client.post("/token/refresh/", { refresh })
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

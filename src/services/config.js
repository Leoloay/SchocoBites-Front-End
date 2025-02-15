import axios from "axios"

const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
})

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken")
  const refToken = localStorage.getItem("refreshToken")
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.error("Unauthorized.")
      localStorage.removeItem("accessToken")
    }
    return Promise.reject(error)
  }
)
export default client

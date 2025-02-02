import API from "./api"

export const register = async (userData) => {
  return await API.post("/auth/signup/", userData)
}

export const login = async (credentials) => {
  return await API.post("/auth/login/", credentials)
}

export const logout = async () => {
  return await API.post("/auth/logout/", {
    refresh: localStorage.getItem("refresh_token"),
  })
}

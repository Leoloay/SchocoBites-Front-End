import { useState } from "react"
import { registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await registerUser(userData)
    if (response) {
      console.log("Registration successful:", response)
      setError("")
    } else {
      setError("Registration failed")
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Register
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-900">
            Username
          </label>
          <input
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
            type="text"
            name="username"
            placeholder="Username"
            value={userData.username}
            onChange={handleChange}
          />
          <label className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
          <label className="block text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          <button
            className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
            type="submit"
          >
            Register
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

export default Register

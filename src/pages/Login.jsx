import { useState } from "react"
import { login } from "../services/auth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await login({ email, password })
    localStorage.setItem("access_token", response.data.access)
    localStorage.setItem("refresh_token", response.data.refresh)
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm/6 font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              type="email"
              placeholder="username"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm/6 font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm/6 text-gray-500">
          Don't have a user?
          <a
            href="/register"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign-Up Now!
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login

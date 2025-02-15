import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, [])

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  const placeOrder = () => {
    if (cart.length === 0) return alert("Your cart is empty!")

    const order = {
      items: cart,
      totalPrice: total,
      date: new Date().toLocaleString(),
    }

    localStorage.removeItem("cart")
    setCart([])

    navigate("/orders")
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 lg:flex">
        {/* Left Column - Billing Information */}
        <div className="lg:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Billing Information
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shipping Address
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="123 Main St, City"
                required
              />
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
          <div className="mt-4 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x BHD {item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="text-right font-bold text-lg mt-4">
            Total: <span className="text-green-600">BHD {total}</span>
          </div>
          <button
            onClick={placeOrder}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg shadow hover:bg-blue-700 mt-4 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout

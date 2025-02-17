import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../services/orderService"
import { createOrderItem } from "../services/orderItemService"

const Checkout = () => {
  const [cart, setCart] = useState([])
  const [formData, setFormData] = useState({
    user: localStorage.getItem("user_id"),
    status: "Pending",
    payment_status: "unpaid",
    address: "",
    phone: "",
    total_Price: 0,
    special_instruction: " ",
  })
  const navigate = useNavigate()

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || []
    setCart(cartItems)
    setFormData((prev) => ({
      ...prev,
      total_Price: cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2),
    }))
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    if (cart.length === 0) return alert("Your cart is empty!")
    if (!formData.address || !formData.phone)
      return alert("Please enter address and phone number.")

    const token = localStorage.getItem("accessToken")
    const orderResponse = await createOrder(formData, token)

    if (orderResponse.error) {
      return alert("Error placing order. Please try again.")
    }

    const orderId = orderResponse.id

    for (const item of cart) {
      const orderItemData = {
        order: orderId,
        product: item.id,
        quantity: item.quantity,
        price_at_order: item.price,
      }
      await createOrderItem(orderItemData, token)
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
          <form onSubmit={placeOrder} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Instructions
              </label>
              <textarea
                name="special_instruction"
                value={formData.special_instruction}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Optional instructions for your order..."
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
            Total:{" "}
            <span className="text-green-600">BHD {formData.total_Price}</span>
          </div>
          <button
            type="submit"
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

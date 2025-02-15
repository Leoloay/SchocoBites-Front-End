import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, [])

  const updateQuantity = (id, quantity) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    )
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{item.name}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) =>
                  updateQuantity(item.id, event.target.value)
                }
                className="border p-1 w-16 text-center"
              />
              <span>BHD {item.price * item.quantity}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: BHD {total.toFixed(2)}
          </div>
          <div className="text-right mt-4">
            <Link to="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart

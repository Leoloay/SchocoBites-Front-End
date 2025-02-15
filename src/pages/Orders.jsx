import { useState, useEffect } from "react"
import { getOrders } from "../services/orderService"
import { Link } from "react-router-dom"

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders()
      setOrders(data)
    }
    fetchOrders()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Orders</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li
                key={order.id}
                className="border-b py-4 flex justify-between items-center"
              >
                <span>Order #{order.id}</span>
                <span className="font-semibold">BHD {order.total_Price}</span>
                <Link
                  to={`/orders/${order.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Orders

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOrderById } from "../services/orderService"

const OrdersDetails = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await getOrderById(id)
      setOrder(data)
    }
    fetchOrder()
  }, [id])

  if (!order) return <h1>Loading...</h1>

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Order #{order.id}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <ul>
          {order.items.map((item) => (
            <li key={item.id} className="border-b py-4 flex justify-between">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span className="font-semibold">BHD {item.price}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold mt-4">Total: BHD {order.totalPrice}</p>
      </div>
    </div>
  )
}

export default OrdersDetails

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOrderById } from "../services/orderService"
import { getOrderItemsByOrder } from "../services/orderItemService"
import { getProducts } from "../services/productsService"

const OrdersDetails = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const [orderItems, setOrderItems] = useState([])
  const [products, setProducts] = useState({})

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const orderData = await getOrderById(id)
      setOrder(orderData)

      const itemsData = await getOrderItemsByOrder(id)
      setOrderItems(itemsData)

      const productsData = await getProducts()
      const productsMap = productsData.reduce((acc, product) => {
        acc[product.id] = product.name // Map product ID to product name
        return acc
      }, {})
      setProducts(productsMap)
    }

    fetchOrderDetails()
  }, [id])

  // Calculate total price dynamically
  const totalPrice = orderItems.reduce(
    (sum, item) => sum + item.price_at_order * item.quantity,
    0
  )

  if (!order) return <h1>Loading...</h1>

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Order #{order.id}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <ul>
          {orderItems.map((item) => (
            <li key={item.id} className="border-b py-4 flex justify-between">
              <span>{products[item.product] || "Unknown Product"}</span>
              <span>Qty: {item.quantity}</span>
              <span className="font-semibold">BHD {item.price_at_order}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold mt-4">
          Total: BHD {totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default OrdersDetails

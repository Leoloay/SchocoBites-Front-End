import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul>
        <li className="inline-block mr-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="inline-block mr-4">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="inline-block mr-4">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="inline-block mr-4">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="inline-block mr-4">
          <NavLink to="/register">Register</NavLink>
        </li>
        <li className="inline-block mr-4">
          <NavLink to="/product/add">Add Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

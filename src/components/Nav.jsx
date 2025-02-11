import { NavLink } from "react-router-dom"

const Nav = ({ user, logOut }) => {
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
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li className="inline-block mr-4">
          <NavLink to="/contact-us2">Contact Us 2</NavLink>
        </li>
        {user ? (
          <>
            <li className="inline-block mr-4">
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li className="inline-block mr-4">
              <NavLink to="/orders">My Orders</NavLink>
            </li>
            <li className="inline-block mr-4">
              <button
                className="inline-block mr-4"
                type="button"
                onClick={logOut}
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="inline-block mr-4">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="inline-block mr-4">
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav

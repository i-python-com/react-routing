import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <NavLink to="/" style={navStyle}>
        <h3>Logo</h3>
      </NavLink>
      <ul className="nav-links">
        <NavLink to="/about" style={navStyle}>
          <li>About</li>
        </NavLink>
        <NavLink to="/shop" style={navStyle}>
          <li>Shop</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav

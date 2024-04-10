import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="bg-dark text-light py-4">
    <div className="container">
      <h2>Ecommerce Website</h2>
      <nav>
        <ul className='nav'>
          <li className='nav-item'><NavLink className="nav-link">Home</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Products</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">About</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="bg-dark text-light pt-4">
    <div className="container">
      <h2 className='display-2 fw-normal pb-4'>Ecommerce Website</h2>
      <nav>
        <ul className='nav'>
          <li className='nav-item'><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link" to="/">Products</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link" to="/">About</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;
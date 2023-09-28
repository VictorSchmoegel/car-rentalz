import logo from '../../src/assets/images/logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
      <div className='container'>
        <div className='content'>
          <div className='header_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='header_pages'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/models">Models</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='header_button'>
            <button className='singin_button'>Sing In</button>
            <button className='register_button'>Register</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
import logo from '../../src/assets/images/logo.jpg'
import './Header.css'

function Hearder() {
  return (
    <header>
      <div className='container'>
        <div className='content'>
          <div className='header_logo'>
            <img src={ logo } alt='logo' />
          </div>
          <div className='header_pages'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Models</li>
              <li>Testimonials</li>
              <li>Contact</li>
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

export default Hearder;
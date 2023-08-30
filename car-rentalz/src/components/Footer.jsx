import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_content">
            <ul>
              <li><strong id='car_footer'>Car</strong><strong id='rentalz_footer'>Rentalz</strong></li>
              <li>We offer the best service for renting your vehicle according to your needs.</li>
              <li>1234-1111</li>
              <li>carrentalz@gmail.com</li>
            </ul>
            <ul>
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>
            <ul>
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates</p>.
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email Address"
                >
                </input>
              </li>
              <li>
                <button>Submit</button>
              </li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import home_img from '../../src/assets/images/home_car.jpg'
import './Home.css'

function Home() {
  return (
    <section>
      <div className="home_container">
        <div className="home_content">
          <div className="home_text">
            <h3>The easiest way to travel</h3>
            <p><strong id='car'>Car</strong><strong id='rentalz'>Rentalz</strong> makes your trip easier and at the <strong id='price'>best price</strong></p>
            <div className='home_button'>
              <button className='rent_button'>Select rental date</button>
            </div>
          </div>
          <div className="home_img">
            <img id='hero_img' src={home_img} alt='car' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
import React, { useRef } from 'react';
import FormRental from '../components/FormRental';
import Categories from '../components/Categories';

import home_img from '../../src/assets/images/home_car.jpg'
import './Home.css'

function Home() {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section>
      <div className="home_container">
        <div className="home_content">
          <div className="home_text">
            <h3>The easiest way to travel</h3>
            <p><strong id='car'>Car</strong><strong id='rentalz'>Rentalz</strong> makes your trip easier and at the <strong id='price'>best price</strong></p>
            <div className='home_button'>
              <button
                className='rent_button'
                onClick={handleSubmit}
              >
                Select rental date
              </button>
            </div>
          </div>
          <div className="home_img">
            <img id='hero_img' src={home_img} alt='car' />
          </div>
        </div>
      </div>
      <div ref={ formRef }>
        <FormRental />
      </div>
      <Categories />
    </section>
  )
}

export default Home;
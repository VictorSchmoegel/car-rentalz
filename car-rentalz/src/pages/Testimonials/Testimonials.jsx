import Footer from '../../components/Footer';
import image01 from '../../assets/images/testimonials/testimonials01.png';
import './Testimonials.css'

function Testimonials() {
  return (
    <section className='testimonials_section'>
      <div className='testimonials_container'>
        <div className='testimonials_content'>
          <div className='testimonials_top_title'>
            <h1>Testimonials</h1>
            <p>Explore the transformative impact we've had on our clients by delving into their testimonials. Having directly encountered our service and witnessed tangible results, our clients are enthusiastic about sharing their positive experiences with you.</p>
          </div>
          <div className='testimonials_clients'>
            <div className='testimonials_clients_box'>
              <div className='testimonials_clients_box_title'>
                <img className='testimonials_img' src={image01} alt="#" />
                <h3>Jorge Clone</h3>
              </div>
              <div className='testimonials_clients_box_text'>
                <h4>Effortless Booking, Wide Car Selection</h4>
                <p>Used CarRentalz for a weekend trip loved the easy booking process and the diverse range of cars available. Competitive prices and a hassle-free experience. Definitely a satisfied customer!</p>
              </div>
            </div>
            <div className='testimonials_clients_box'>
              <div className='testimonials_clients_box_title'>
                <img className='testimonials_img' src={image01} alt="#" />
                <h3>Jorge Clone</h3>
              </div>
              <div className='testimonials_clients_box_text'>
                <h4>Top-Notch Customer Service</h4>
                <p>Had some questions about rental terms, and CarRentalz's customer service was excellent quick responses and very helpful. The professionalism and courtesy of the staff confirmed that I made the right choice.</p>
              </div>
            </div>
            <div className='testimonials_clients_box'>
              <div className='testimonials_clients_box_title'>
                <img className='testimonials_img' src={image01} alt="#" />
                <h3>Jorge Clone</h3>
              </div>
              <div className='testimonials_clients_box_text'>
                <h4>Spotless Cars, Smooth Rides</h4>
                <p>Rented from CarRentalz and was impressed by the cleanliness and condition of the car. It drove like a dream. Clearly, CarRentalz takes pride in maintaining their fleet, providing a reliable and enjoyable driving experience. Will use them for future trips for sure!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Testimonials;
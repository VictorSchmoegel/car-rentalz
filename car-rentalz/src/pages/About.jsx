import Footer from "../components/Footer";
import './About.css';
import about_img from '../assets/images/about_images/about_img.jpg';
import img1 from '../assets/images/about_images/carro_icon1.png';
import img2 from '../assets/images/about_images/carro_icon2.png';
import img3 from '../assets/images/about_images/carro_icon3.png';
import arrow from '../assets/images/about_images/arrow_animation.json';
import planicon1 from '../assets/images/about_images/plan_icon1.png';
import planicon2 from '../assets/images/about_images/plan_icon2.png';
import planicon3 from '../assets/images/about_images/plan_icon3.png';
import Lottie from 'lottie-react';
import HeaderPages from "../components/HeaderPages";

function About() {
  return (
    <section className="about_page">
      <HeaderPages title="About" />
      <div className="about_container">
        <div className="about_main">
          <img className="about_main_img" src={about_img} alt="img of a car"></img>
          <div className="about_main_text">
            <h1 className="about_h1">About company</h1>
            <p className="about_p">
              Welcome to CarRentalz! We're your trusted partner for stress-free car rentals. Our mission is to make your travels more enjoyable and convenient.
              <br></br>
              With a diverse fleet of well-maintained vehicles, we've got you covered for family vacations, business trips, or weekend getaways. From compact cars to spacious SUVs, we offer flexibility to suit your needs.
              <br></br>
              Join us on your next adventure. Discover the CarRentalz advantage.
              <br></br>
              Thank you for choosing CarRentalz.

              Safe travels,
              The CarRentalz Team</p>
            <div className="about_main_text_icons">
              <div className="about_main_text_icons_box">
                <img className="icon_img" src={img1} alt="logo of a car list"></img>
                <span className="span_icons">
                  <h4 className="h4_icons">25</h4>
                  <p className="p_icons">Car Models</p>
                </span>
              </div>
              <div className="about_main_text_icons_box">
                <img className="icon_img" src={img2} alt="logo of a car list"></img>
                <span className="span_icons">
                  <h4 className="h4_icons">125</h4>
                  <p className="p_icons">Cities</p>
                </span>
              </div>
              <div className="about_main_text_icons_box">
                <img className="icon_img" src={img3} alt="logo of a car list"></img>
                <span className="span_icons">
                  <h4 className="h4_icons">&infin;</h4>
                  <p className="p_icons">Fulltime service</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_trip_plan">
        <div className="about_trip_plan_text">
          <h3>Plan your trip</h3>
          <h1>Easier in just a few steps</h1>
        </div>
        <div className="about_trip_plan_steps">
          <div className="about_trip_plan_images">
            <img className="trip_icons" src={planicon1} alt="icon with a car"></img>
            <span>
              <h4 className="h4_trip">Select your car</h4>
              <p className="p_trip">Choose the car that best suits your needs</p>
            </span>
          </div>
          <div className="About_trip_plan_icon_animation">
            <Lottie animationData={arrow}></Lottie>
          </div>
          <div className="about_trip_plan_images">
            <img className="trip_icons" src={planicon2} alt="icon with a car"></img>
            <span>
              <h4 className="h4_trip">Contact our team</h4>
              <p className="p_trip">One of our attendants will take care of everything!!</p>
            </span>
          </div>
          <div className="About_trip_plan_icon_animation">
            <Lottie animationData={arrow}></Lottie>
          </div>
          <div className="about_trip_plan_images">
            <img className="trip_icons" src={planicon3} alt="icon with a car"></img>
            <span>
              <h4 className="h4_trip">Enjoy your trip</h4>
              <p className="p_trip">Good travel and drive safe!</p>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;
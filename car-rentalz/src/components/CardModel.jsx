import hb20 from '../assets/images/model/HB20.png'
import toro from '../assets/images/model/toro.png'
import minivan from '../assets/images/model/minivan.png'
import renegade from '../assets/images/model/renegade.png'
import s10 from '../assets/images/model/s10.png'
import t_cross from '../assets/images/model/t_cross.png'
import { Link } from "react-router-dom";
import Footer from './Footer/Footer'
import './CardModel.css'

function CardModels() {
  return (
      <section className="models_section">
        <div className="models_container">
          <div className="models_div">

            <div className="models_div_box">
              <div className="models_div_box_img">
                <img src={hb20} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>HB20</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>R$ 75,00</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models_div_box_text_name_price_price_details">
                    <span>
                       &nbsp; Manual
                    </span>
                    <span>
                      Diesel &nbsp;
                    </span>
                  </div>
                  <div className="models_div_box_btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models_div_box">
              <div className="models_div_box_img">
                <img src={t_cross} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>T-Cross</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>R$ 180,00</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models_div_box_text_name_price_price_details">
                    <span>
                       &nbsp; Manual
                    </span>
                    <span>
                      Diesel &nbsp;
                    </span>
                  </div>
                  <div className="models_div_box_btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models_div_box">
              <div className="models_div_box_img">
                <img src={toro} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Fiat Toro</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>R$ 350,00</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models_div_box_text_name_price_price_details">
                    <span>
                      Automatic
                    </span>
                    <span>
                      Diesel
                    </span>
                  </div>
                  <div className="models_div_box_btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models_div_box">
              <div className="models_div_box_img">
                <img src={minivan} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Fiat Doblo</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>R$ 233,00</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models_div_box_text_name_price_price_details">
                    <span>
                      Automatic
                    </span>
                    <span>
                      Gasoline
                    </span>
                  </div>
                  <div className="models_div_box_btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models_div_box">
              <div className="models_div_box_img">
                <img src={renegade} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Jeep Renegade</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>R$ 180,00</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models_div_box_text_name_price_price_details">
                    <span>
                      Automatic
                    </span>
                    <span>
                      Diesel
                    </span>
                  </div>
                  <div className="models_div_box_btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models_div_box">
              <div className="models_div_box_img">
                <img src={s10} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Chev S10</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>R$ 350,00</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models_div_box_text_name_price_price_details">
                    <span>
                      Automatic
                    </span>
                    <span>
                      Gasoline
                    </span>
                  </div>
                  <div className="models_div_box_btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </section>
  );
}

export default CardModels;
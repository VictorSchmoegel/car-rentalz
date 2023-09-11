import hb20 from '../assets/images/model/HB20.png'
import toro from '../assets/images/model/toro.png'
import minivan from '../assets/images/model/minivan.png'
import renegade from '../assets/images/model/renegade.png'
import s10 from '../assets/images/model/s10.png'
import t_cross from '../assets/images/model/t_cross.png'
import { Link } from "react-router-dom";
import Footer from './Footer'
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
                      <p>Audi A1</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>$45</h4>
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
                      <p>Audi A1</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>$45</h4>
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
                      <p>Audi A1</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>$45</h4>
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
                <img src={minivan} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Audi A1</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>$45</h4>
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
                <img src={renegade} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Audi A1</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>$45</h4>
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
                <img src={s10} alt="car_img" />
                <div className="models_div_box_text">
                  <div className="models_div_box_text_name_price">
                    <div className="models_div_box_text_name_price_name">
                      <p>Audi A1</p>
                    </div>
                    <div className="models_div_box_text_name_price_price">
                      <h4>$45</h4>
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

          </div>
        </div>
        <Footer />
      </section>
  );
}

export default CardModels;
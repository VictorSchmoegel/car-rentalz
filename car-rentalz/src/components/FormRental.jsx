import React from 'react';
import './FormRental.css';

function FormRental() {
  return (
    <section className='form_section'>
      <div className="form_container">
        <div className="form_content">
          <div className='form_box'>
            <h2 className='form_title'>Chose your travel</h2>
            <form className="main_form">
              <div className="form_select_car">
                <label htmlFor="car_type">Select your car:</label>
                <select className='main_select' name='car_type'>
                  <option value='Hyundai HB20'>Hyundai HB20</option>
                  <option value='VW Polo'>Vw Polo</option>
                  <option value='Chevrolet Onix'>Chevrolet Onix</option>
                  <option value='Fiat Toro'>Peugeot 208</option>
                  <option value='Peugeot 208'>Peugeot 208</option>
                </select>
              </div>

              <div className="form_select_car">
                <label htmlFor="pickup">Pick up:</label>
                <select className='city_select' name='pickup'>
                  <option value='Brasília'>Brasília</option>
                  <option value='Rio de Janeiro'>Rio de Janeiro</option>
                  <option value='Salvador'>Salvador</option>
                  <option value='São Paulo'>São Paulo</option>
                  <option value='Belo Horizonte'>Belo Horizonte</option>
                </select>
              </div>

              <div className="form_select_car">
                <label htmlFor="dropof">Drop-of:</label>
                <select className='drop_select' name='dropof'>
                  <option value='Belo Horizonte'>Belo Horizonte</option>
                  <option value='Brasília'>Brasília</option>
                  <option value='Rio de Janeiro'>Rio de Janeiro</option>
                  <option value='Salvador'>Salvador</option>
                  <option value='São Paulo'>São Paulo</option>
                </select>
              </div>

              <div className="form_withdraw_date">
                <label htmlFor="withdral">Withdral:</label>
                <input
                  type="date"
                  id="withdral"
                  name="withdral"
                  placeholder="dd/mm/yyyy" />
                <input type="time" />
              </div>

              <div className="form_withdraw_date">
                <label htmlFor="dropof">Drop-of:</label>
                <input
                  type="date"
                  id="dropof"
                  name="dropof"
                  placeholder="dd/mm/yyyy" />
                <input type="time" />
              </div>

              <button className='form_btn_search' type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormRental;

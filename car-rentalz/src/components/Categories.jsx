import mobi_img from '../../src/assets/images/fiat-mobi.jpg'
import minivan from '../../src/assets/images/fiat_doblo.jpg'
import suv from '../../src/assets/images/SUV.jpg'
import truck from '../../src/assets/images/truck.jpg'
import premium from '../../src/assets/images/premium.jpg'

import './Categories.css'

function Categories() {
  return (
    <section className='categories_section'>
      <div className="categories_container">
        <div className="categories_content">
          <div className="categories_box">
            <h2 className='categories_title'>Vehicle categories</h2>
            <div className="categories_list">
              <ul>
                <div className='img_list'>
                  <p>Economic</p>
                  <li><img src={ mobi_img } alt='mobi_car'></img></li>
                  <p>A partir de</p>
                  <p>R$ 75,00/dia</p>
                  <button>Learn more</button>
                </div>
                <div className='img_list'>
                  <p>Minivan</p>
                  <li><img src={ minivan } alt='mobi_car'></img></li>
                  <p>A partir de</p>
                  <p>R$ 233,00/dia</p>
                  <button>Learn more</button>
                </div>
                <div className='img_list'>
                  <p>SUV</p>
                  <li><img src={ suv } alt='mobi_car'></img></li>
                  <p>A partir de</p>
                  <p>R$ 180,00/dia</p>
                  <button>Learn more</button>
                </div>
                <div className='img_list'>
                  <p>Premium</p>
                  <li><img src={ premium } alt='mobi_car'></img></li>
                  <p>A partir de</p>
                  <p>R$ 280,00/dia</p>
                  <button>Learn more</button>
                </div>
                <div className='img_list'>
                  <p>Truck</p>
                  <li><img src={ truck } alt='mobi_car'></img></li>
                  <p>A partir de</p>
                  <p>R$ 350,00/dia</p>
                  <button>Learn more</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
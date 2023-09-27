import React, { useState } from 'react';
import './FormRental.css';
import ListSelect from '../ListSelect';
import DataInput from '../DataInput';
import FormButton from '../FormButton';

function FormRental(props) {
  const carType = [
    '-',
    'Hyundai HB20',
    'VW Polo',
    'Chevrolet Onix',
    'Fiat Toro',
    'Peugeot 208'
  ];

  const city = [
    '-',
    'Brasília',
    'Rio de Janeiro',
    'Salvador',
    'São Paulo',
    'Belo Horizonte'
  ];

  const [car, setCar] = useState('');
  const [withdralCity, setWithdralCity] = useState('');
  const [dropOfCity, setDropOfCity] = useState('');
  const [withdralDate, setWithdralDate] = useState('');
  const [dropOfDate, setDropOfDate] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (car === '' || withdralCity === '' || dropOfCity === '' || withdralDate === '' || dropOfDate === '') {
      setError(true);
      return;
    }
    props.onChanged({
      car,
      withdralCity,
      dropOfCity,
      withdralDate,
      dropOfDate
    })
    console.log('Form Submited =>', car, withdralCity, dropOfCity, withdralDate, dropOfDate);
  };

  return (
    <section className='form_section'>
      <div className="form_container">
        <div className="form_content">
          <div className='form_box'>
            <h2 className='form_title'>Chose your travel</h2>
            <form className="main_form" onSubmit={handleSubmit}>
              <ListSelect
                itens={carType}
                label='Chose your car'
                value={car}
                onChange={value => setCar(value)}
              />
              <ListSelect
                itens={city}
                label='Pick up'
                value={withdralCity}
                onChange={value => setWithdralCity(value)}
              />
              <ListSelect
                itens={city}
                label='Drop-of'
                value={dropOfCity}
                onChange={value => setDropOfCity(value)}
              />
              <DataInput
                label='Withdral'
                value={withdralDate}
                onChange={value => setWithdralDate(value)}
              />
              <DataInput
                label='Drop-of'
                value={dropOfDate}
                onChange={value => setDropOfDate(value)}
              />
              <FormButton>Search</FormButton>
            </form>
            {
              error && <p className='form_error'>Please, fill in all fields</p>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormRental;

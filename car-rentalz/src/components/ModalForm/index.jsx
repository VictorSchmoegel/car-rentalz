import './ModalForm.css'
import React, { useState } from 'react';
import TextInput from '../TextInput';

function ModalForm({ isOpen, setOpenModal, onChanged, title }) {
  const [firtsName, setFirtsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firtsName === '' || lastName === '' || phoneNumber === '') {
      return setError(true);
    } else {
      setError(false);
    }
    onChanged({
      firtsName,
      lastName,
      phoneNumber,
    })
    console.log('Form Submited =>', firtsName);
  };

  if (isOpen) {
    return (
      <section className='confirmation_form_section'>
        <div className='confirmation_form_container'>
          <div className='confirmation_form_content'>
            <div className='confirmation_form_box'>
              <h2 className='confirmation_form_title'>Confirm Your Booking!</h2>
              <form className='confirmation_form_main_form' onSubmit={handleSubmit}>
                <TextInput
                  label='First Name'
                  type='text'
                  value={firtsName}
                  onChange={value => setFirtsName(value)}
                />
                <TextInput
                  label='Last Name'
                  type='text'
                  value={lastName}
                  onChange={value => setLastName(value)}
                />
                <TextInput
                  label='Phone number'
                  type='number'
                  value={phoneNumber}
                  onChange={value => setPhoneNumber(value)}
                />
                <TextInput
                  label='Age'
                  type='number'
                  value={age}
                  onChange={value => setAge(value)}
                />
                <TextInput
                  label='Email'
                  type='email'
                  value={email}
                  onChange={value => setEmail(value)}
                />
                <TextInput
                  label='Adress'
                  type='text'
                  value={adress}
                  onChange={value => setAdress(value)}
                />
                <TextInput
                  label='City'
                  type='text'
                  value={city}
                  onChange={value => setCity(value)}
                />
                <TextInput
                  label='ZipCode'
                  type='number'
                  value={zipCode}
                  onChange={value => setZipCode(value)}
                />
              </form>
              <div className='buttons_box'>
                <button className='modal_button' onClick={() => setOpenModal(!isOpen)}>Confirm booking</button>
                <button className='modal_button' onClick={() => setOpenModal(!isOpen)}>Cancel booking</button>
              </div>
              {error && <p className='error_message'>Please fill in the field</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ModalForm;
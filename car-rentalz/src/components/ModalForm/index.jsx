import './ModalForm.css'
import React, { useState } from 'react';
import TextInput from '../TextInput';

function ModalForm({ isOpen, onChanged, title }) {
  const [firtsName, setFirtsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [open, setOpen] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firtsName === '' || lastName === '') {
      return setError(true);
    } else {
      setError(false);
    }
    onChanged({
      firtsName,
      lastName,
    })
    console.log('Form Submited =>', firtsName);
  };

  const handleModal = (event) => {
    event.preventDefault();
    setOpen(!open);
    console.log('Modal =>', open);
  }

  return (
    <section className='confirmation_form_section'>
      <div className='confirmation_form_container'>
        <div className='confirmation_form_content'>
          <div className='confirmation_form_box'>
            <h2 className='confirmation_form_box'>{title}</h2>
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
                onChanged={value => setLastName(value)}
              />
              <button onClick={handleModal}> modal</button>
            </form>
            {error && <p className='error_message'>Please fill in the field</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalForm;
import TextInput from '../components/TextInput';
import TextBox from '../components/TextBox';
import './Contact.css';
import Footer from '../components/Footer/Footer';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Contact() {
  return (
    <section className='contact_section'>
      <div className='contact_container'>
        <div className='contact_content'>
          <div className='contact_box'>
            <div className='contact_box_left'>
              <h3>Need more information?</h3>
              <ul>
                <li><FiMail />CarRentalz@gmail.com</li>
                <li><FaPhoneSquareAlt />1234-1111</li>
              </ul>
            </div>
            <div className='contact_box_right'>
                <TextInput
                  label = 'Full name:'
                  type='text'
                  placeholder='Enter your name'
                />
                <TextInput
                  label = 'Enter email:'
                  type='email'
                  placeholder='Enter your email'
                />
                <TextBox 
                  label = 'Write your doubt here:'
                  placeholder='Write your message'
                />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
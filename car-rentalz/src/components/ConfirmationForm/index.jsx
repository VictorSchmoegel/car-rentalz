import './ConfirmationForm.css'

function ConfirmationForm(props) {
  return (
    <section className='confirmation_form_section'>
      <div className='confirmation_form_container'>
        <div className='confirmation_form_content'>
          <div className='confirmation_form_box'>
            <h2 className='confirmation_form_box'>{props.title}</h2>
            <form className='confirmation_form_main_form'>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmationForm;
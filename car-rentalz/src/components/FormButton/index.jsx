import './FormButton.css';

function FormButton(props) {
  return (
    <button
      className='form_btn_search'
      type="submit"
    >
      {props.children}
    </button>
  );
}

export default FormButton;
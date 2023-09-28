import './TextInput.css'

function TextInput({onChange, type, label, value}) {
  const handleChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className='text_input_container'>
      <label className='text_input_label'>{ label }</label>
      <input
        className='text_input'
        value={ value }
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
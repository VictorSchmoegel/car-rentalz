import './TextInput.css'

function TextInput(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className='text_input_container'>
      <label className='text_input_label'>{props.label}</label>
      <input
        className='text_input'
        type={props.type}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
import './TextBox.css'

function TextBox({onChange, type, label, value, placeholder}) {
  const handleChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className='textbox_container'>
      <label className='textbox_label'>{ label }</label>
      <textarea
        className='textarea_box'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      >
      </textarea>
    </div>
  );
}

export default TextBox;

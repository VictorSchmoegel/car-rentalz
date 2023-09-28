import './DataInput.css';

function DataInput(props) {
  return (
    <div className="form_withdraw_date">
      <label htmlFor="withdral">{props.label}</label>
      <input
        onChange={event => props.onChange(event.target.value)}
        value={props.value}
        type="date"
        id="withdral"
        name="withdral"
        placeholder="dd/mm/yyyy" />
      <input type="time" />
    </div>
  );
}

export default DataInput;
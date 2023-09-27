import './ListSelect.css';

function ListSelect(props) {
  return (
    <div className="form_select_car">
      <label htmlFor="car_type">{props.label}</label>
      <select
        onChange={event => props.onChange(event.target.value)}
        className='main_select'
        name='car_type'
        value={props.value}
      >
        {
          props.itens.map((itens, index) => <option key={index} value={itens}>{itens}</option>)
        }
      </select>
    </div>
  );
}

export default ListSelect;
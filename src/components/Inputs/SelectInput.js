export default function TextInput(props) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        type={props.type}
        className="form-control"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        required={props.required}
      >
        {props.items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export const RadioButton = ({ label, state, value, onChange }) => {
    return (
      <label>
        <input name={value} type="radio" checked={state === value } onChange={()=>onChange(value)} />
        {label}
      </label>
    );
  };
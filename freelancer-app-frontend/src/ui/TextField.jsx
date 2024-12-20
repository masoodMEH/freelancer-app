/* eslint-disable react/prop-types */
const TextField = ({ label, name, value, onChange }) => {
  return (
    <div className="">
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField__input"
        type="text"
      />
    </div>
  );
};

export default TextField;

import React from "react";
import PropTypes from "prop-types";

function TextInput({ id, label, name, onChange, value }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type="text"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default TextInput;

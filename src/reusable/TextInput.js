import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const TextInput = ({ id, label, name, onChange, value, isInitialFocus }) => {
  const inputEl = useRef();

  useEffect(() => {
    if (isInitialFocus) {
      inputEl.current.focus();
    }
  }, [isInitialFocus]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type="text"
        id={id}
        ref={inputEl}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default TextInput;

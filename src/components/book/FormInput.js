import React, { useState } from 'react'
import "./formInput.css"

function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage,min,max, onChange, submitted, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
      <div className="formInputDiv">
        {/* <label className="input-label">{label}</label> */}
        <input
          className="formInput"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "numberofpeople" && setFocused(true)
          }
          focused={focused.toString()}
          min={min}
          max={max}
        />
        {!submitted && <span className="input-span">{errorMessage}</span>}
      </div>
    );
}

export default FormInput

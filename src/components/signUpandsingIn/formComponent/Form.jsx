import React from "react";
import classes from "../formComponent/Form.scss";

const Form = ({ handleChange, label, ...allProps }) => {
  return (
    <div className="form-container">
      <form className="form">
        <input className="form-input" onChange={handleChange} {...allProps} />
        {label ? (
          <label
            className={`${
              allProps.value.length ? "shrink" : ""
            } form-input-label `}
          >
            {label}
          </label>
        ) : null}
      </form>
    </div>
  );
};

export default Form;

import React from "react";

const FormField = ({ label, value, fieldName, type, className, textAreaField, fieldFn }) => {
  const handleField = inputValue => {
    fieldFn(inputValue);
  };
  return (
    <div className="form-field">
      <label>{label}</label>
      {!textAreaField &&
      <input
        onChange={e => handleField(e.target.value)}
        value={value}
        name={fieldName}
        type={type}
        className={className}
      /> }
      {textAreaField &&
      <textarea 
      onChange={e => handleField(e.target.value)}
      name={fieldName}
      type={type}
      className={className}
      value={value}
      rows="4" 
      cols="50"/>

      }
    </div>
  );
};

export default FormField;

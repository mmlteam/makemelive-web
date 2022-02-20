import React from "react";

const PopupFormField = ({
  label,
  value,
  fieldName,
  type,
  className,
  fieldFn
}) => {
  const handleField = inputValue => {
    fieldFn(inputValue);
  };
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        onChange={e => handleField(e.target.value)}
        value={value}
        name={fieldName}
        type={type}
        className={className}
      />
    </div>
  );
};

export default PopupFormField;

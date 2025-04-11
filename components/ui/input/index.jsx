const Input = ({
  type = "text",
  id,
  label,
  placeholder = "",
  value,
  onChange,
  containerStyle = "",
  className = "",
  required = false,
}) => {
  return (
    <div className={containerStyle}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full box-border h-[50px] text-white text-[15px] bg-transparent border border-white px-[15px] z-10 relative placeholder:text-white font-bold ${className}`}
      />
    </div>
  );
};

export default Input;

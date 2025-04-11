const Select = ({
  id,
  label,
  options,
  value = "",
  onChange,
  containerStyle = "",
  className = "",
  required = false,
  placeholder = "Select Country",
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

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full box-border h-[50px] text-white text-[15px] bg-transparent border border-white px-[15px] z-10 relative appearance-none focus:outline-none focus:ring-2 focus:ring-white/30 rounded-none font-semibold ${className}`}
        >
          <option value="" disabled hidden className="text-gray-400">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-gray-800 bg-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;

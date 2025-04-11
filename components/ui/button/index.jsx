const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-4 bg-white text-black font-bold text-base  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

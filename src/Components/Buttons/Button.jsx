function Button({
  icon,
  label,
  onClick,
  className = "",
  variant = "solid",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-4 py-2 transition-colors duration-200 cursor-pointer";

  const variants = {
    solid: "bg-gray-200 hover:bg-gray-300",
    outlined: "border bg-transparent hover:bg-white/10",
    filled: "bg-gray-900 text-white hover:bg-gray-800 px-10",
  };



  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${className}
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </button>
  );
}
export default Button;
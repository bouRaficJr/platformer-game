import React from 'react';

const Button = ({ onClick, children, variant = "primary" }) => {
  const baseStyle = "px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    danger: "bg-red-600 hover:bg-red-500 text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
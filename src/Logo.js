import React from "react";

const Logo = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="40" fill="#FF5722" stroke="#F0E6FF" strokeWidth="5" />

      {/* Inner Triangle (Abstract Look) */}
      <polygon points="30,70 50,30 70,70" fill="#4A00E0" />

      {/* Small Circle in Center */}
      <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
    </svg>
  );
};

export default Logo;

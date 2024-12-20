import React from 'react';

//A reusable Button component that will be used across the entire site
//instructions:
// - Add `type` prop for different types of buttons (e.g., submit, reset).
// - Define styles for different button types (e.g., primary, secondary).
// - Include support for disabled state.

const Button = ({ children, onClick, className, type = "button" }) => {
    return (
      <button type={type} className={`btn ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
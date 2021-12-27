import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLE = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize, path }) => {
  console.log(path, buttonStyle, "hi cat?");

  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <Link to="/contact" className="btn-mobile">
      {" "}
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

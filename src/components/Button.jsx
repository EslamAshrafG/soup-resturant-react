/* eslint-disable react/prop-types */
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Button({
  children,
  className = "",
  hoverColor = "#ddae71",
  textColor = "#000",
  bgColor = "#fff",
  borderColor = "#000",
  onClick,
}) {
  const navigate = useNavigate();

  return (
    <button
      className={`border-2 hover:border-white py-3 hover:text-white  px-6 relative overflow-hidden group ${className}`}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
      onClick={onClick || (() => navigate("/menu"))}
    >
      <span className="relative z-10 uppercase">{children}</span>
      <div
        className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
        style={{ backgroundColor: hoverColor }}
      ></div>
    </button>
  );
}

/* eslint-disable react/prop-types */
import "../index.css";
import Title from "./Title.jsx";

export default function PageTitle({
  titleText,
  subtitle,
  bgColor = "white",
  size,
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-14 bg-lightBg"
      style={{ backgroundColor: bgColor }}
    >
      <Title
        titleText={titleText}
        align="center"
        size={size || 100}
        style={{
          marginBottom: "0px",
          fontWeight: "lighter",
        }}
      />
      <p className="text-center text-lg -translate-y-3 text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

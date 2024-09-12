/* eslint-disable react/prop-types */
import "../index.css";

export default function Title({ titleText, align, size, style }) {
  return (
    <h2
      className={`mb-20`}
      style={{
        textAlign: align,
        fontSize: `${size ? `${size}px` : "3.75rem"}`,
        ...style,
      }}
    >
      {titleText}
    </h2>
  );
}

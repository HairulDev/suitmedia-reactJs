import React from "react";

const Button = ({ onClick, children, iconSrc, outlined, rounded }) => {
  const buttonClassNames = `
    flex gap-2 justify-center px-7 pt-3 pb-2.5 
    ${
      outlined
        ? "border-2 border-solid border-sky-950"
        : "text-white bg-sky-950"
    } 
    ${rounded} max-md:px-5
  `;

  return (
    <button onClick={onClick} className={buttonClassNames}>
      <div>{children}</div>
      {iconSrc && (
        <img
          loading="lazy"
          src={iconSrc}
          alt="icon"
          className="shrink-0 self-start w-6 aspect-square"
        />
      )}
    </button>
  );
};

export default Button;

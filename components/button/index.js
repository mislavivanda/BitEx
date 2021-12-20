const Button = ({ type, onClick, style = {}, children }) => {
  return (
    <button
      className={`py-1 px-3 rounded-3xl ${
        type === "filled"
          ? "text-white bg-primary-color"
          : "text-font-color-dark bg-button-classic"
      } hover:cursor-pointer`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

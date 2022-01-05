const Button = ({ type, onClick, classes = "", children }) => {
  return (
    <button
      className={`py-1 px-3 rounded-3xl text-base ${
        type === "filled"
          ? "text-white bg-primary-color"
          : "text-font-color-dark bg-button-classic"
      } hover:cursor-pointer ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

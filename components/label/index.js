const Label = ({ forName, children, classes }) => {
  return (
    <>
      <label
        class={`block text-gray-700 text-sm font-bold mb-2 ${classes}`}
        for={forName}
      >
        {children}
      </label>
    </>
  );
};

export default Label;

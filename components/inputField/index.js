const InputField = ({ placeholder, id, type }) => {
  return (
    <>
      <input
        class="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;

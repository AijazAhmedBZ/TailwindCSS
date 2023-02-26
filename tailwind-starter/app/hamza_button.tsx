const HamzaButton = ({ children }) => {
  return (
    <>
      <button className="mr-10 my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900 hover:scale-150 hover:bg-green-900 hover:text-white hover:border-green-900">
        {children}
      </button>
    </>
  );
};

export default HamzaButton;

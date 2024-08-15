import spinner from "/public/spin.gif";
const Spinner = () => {
  return (
    <div className=" fixed h-screen top-0 left-0 w-full flex justify-center items-center bg-white z-40">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;

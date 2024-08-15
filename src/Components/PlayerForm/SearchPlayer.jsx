import { motion } from "framer-motion";
/* eslint-disable react/prop-types */
const SearchPlayer = ({
  searchPlayer,
  setSearchPlayer,
  handleSearch,
  handleClearSearch,
}) => {
  return (
    <>
      <motion.input
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeIn",
            delay: 0.8,
            type: "spring",
            stiffness: 60,
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
        type="text"
        placeholder="Search your name to see your details"
        className=" borde border-black w-[370px] md:w-[500px] shadow-md py-2 text-lg text-gray-800 rounded-sm px-3"
        value={searchPlayer}
        onChange={(e) => {
          setSearchPlayer(e.target.value);
        }}
      />
      <motion.button
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeIn",
            delay: 0.8,
            type: "spring",
            stiffness: 60,
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
        className="bg-orange-600 w-fit px-3 py-2 text-lg font-medium rounded-sm text-white ml-5"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </motion.button>
      <motion.button
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeIn",
            delay: 1.1,
            type: "spring",
            stiffness: 60,
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
        className="bg-orange-600 w-fit px-3 py-2 text-lg font-medium rounded-sm text-white ml-5"
        onClick={handleClearSearch}
      >
        Clear Search
      </motion.button>
    </>
  );
};

export default SearchPlayer;

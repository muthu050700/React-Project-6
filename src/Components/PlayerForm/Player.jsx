/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
const Player = ({
  name,
  position,
  jerseyNumber,
  height,
  weight,
  experience,
  strength,
  profilePhoto,
  handleDelete,
  handleEdit,
  editNotify,
  deleteNotify,
  indexValue,
  id,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        z: -200,
      }}
      whileInView={{
        opacity: 1,
        z: 0,
        transition: {
          ease: "easeIn",
          delay: 0.4 * indexValue,
          type: "spring",
          stiffness: 60,
          bounce: 20,
          duration: 1,
        },
      }}
      viewport={{
        once: true,
      }}
      className=" bg-white/20 backdrop-blur-lg w-[400px] flex flex-col gap-4  shadow-lg rounded-lg p-3 "
    >
      <img
        src={profilePhoto}
        alt="player-image"
        className="w-full h-[250px] object-cover rounded-md shadow-md"
      />
      <p className="text-3xl font-medium text-center pt-4 pb-3 text-white capitalize">
        Name : {name}
      </p>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-lg font-medium text-white capitalize">
          Position : {position}
        </p>
        <p className="text-lg font-medium  text-white capitalize">
          Jersey Number : {jerseyNumber}
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-lg font-medium text-white  capitalize">
          Height : {height}
        </p>
        <p className="text-lg font-medium text-white capitalize">
          Weight : {weight}
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-lg font-medium text-white capitalize">
          Experience :{" "}
          {experience > 1 ? `${experience} years` : ` ${experience} year`}
        </p>
        <p className="text-lg font-medium text-white capitalize">
          Strength : {strength}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-700  text-white w-fit px-4 py-2 text-lg font-medium rounded-md"
          onClick={() => {
            handleDelete(id);
            deleteNotify();
          }}
        >
          Delete
        </button>
        <button
          className="bg-yellow-600 text-white w-fit px-4 py-2 text-lg font-medium rounded-md"
          onClick={() => {
            handleEdit(id);
            editNotify(name);
          }}
        >
          Edit
        </button>
      </div>
    </motion.div>
  );
};

export default Player;

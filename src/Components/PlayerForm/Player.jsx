/* eslint-disable react/prop-types */
import React from "react";

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
  id,
}) => {
  return (
    <div className=" bg-white/10 backdrop-blur-lg w-[400px] flex flex-col gap-4  shadow-lg rounded-lg p-2 ">
      <img
        src={profilePhoto}
        alt="player-image"
        className="w-full h-[250px] object-cover rounded-md"
      />
      <p className="text-2xl font-medium text-center pt-4 text-white capitalize">
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
          className="bg-orange-600 w-fit px-3 py-1 text-lg font-medium rounded-md"
          onClick={() => {
            handleDelete(id);
            deleteNotify();
          }}
        >
          Delete
        </button>
        <button
          className="bg-orange-600 w-fit px-3 py-1 text-lg font-medium rounded-md"
          onClick={() => {
            handleEdit(id);
            editNotify(name);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Player;

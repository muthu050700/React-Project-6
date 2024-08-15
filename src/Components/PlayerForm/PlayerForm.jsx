import { useEffect, useState } from "react";

const PlayerForm = ({
  addPlayerDetails,
  editPlayer,
  formEditPlayer,
  notify,
  successEditNotify,
}) => {
  const initialValue = {
    name: "",
    position: "",
    jerseyNumber: "",
    height: 0,
    weight: "NA",
    experience: 0,
    strength: "",
    profilePhoto: "",
  };
  //connecting the form and form details
  const [formDetails, setFormDetails] = useState(initialValue);
  // useEffect to update editplayer details in form
  useEffect(() => {
    if (editPlayer !== null) {
      setFormDetails(editPlayer);
    }
  }, [editPlayer]);

  //getting the formdetails
  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  //submiting the form details
  const handleForm = (e) => {
    e.preventDefault();
    if (editPlayer !== null) {
      formEditPlayer(formDetails, editPlayer.id);
      successEditNotify();
    } else {
      addPlayerDetails(formDetails);
      notify();
      console.log(formDetails);
    }

    setFormDetails(initialValue);
  };

  return (
    // palyer form
    <div className="bg-gray-900 py-20 px-4 lg:px-0">
      <h1 className="text-white text-center font-bold text-4xl pb-10">
        Add Your Details
      </h1>
      <div className="  h-full py-5 w-full flex justify-center items-center">
        <div className="bg-white/10 backdrop-blur-lg text-white w-[800px] min-w-[300px ] px-4 py-10 rounded-xl">
          <form className="flex flex-col gap-1" onSubmit={handleForm}>
            <label htmlFor="name" className="font-medium text-lg">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formDetails.name}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />

            <label className="font-medium text-lg">Position:</label>
            <input
              type="text"
              name="position"
              id="position"
              required
              value={formDetails.position}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <label className="font-medium text-lg">Jersey Number:</label>
            <input
              type="number"
              name="jerseyNumber"
              id="jerseyNumber"
              required
              value={formDetails.jerseyNumber}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <label className="font-medium text-lg">Height:</label>
            <input
              type="string"
              name="height"
              id="height"
              required
              value={formDetails.height}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <label className="font-medium text-lg">Weight (Optional):</label>
            <input
              type="text"
              name="weight"
              id="weight"
              value={formDetails.weight}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <label className="font-medium text-lg">Years of Experience:</label>
            <input
              type="number"
              name="experience"
              id="experience"
              required
              value={formDetails.experience}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <label className="font-medium text-lg">Strengths:</label>
            <input
              type="text"
              name="strength"
              id="strength"
              required
              value={formDetails.strength}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <label className="font-medium text-lg">
              Upload Your Player Photo:
            </label>
            <input
              type="text"
              name="profilePhoto"
              id="profilePhoto"
              required
              value={formDetails.profilePhoto}
              onChange={handleFormChange}
              className=" border border-black shadow-md py-2 text-lg text-gray-800 rounded-md px-3 mb-3"
            />
            <div className="flex justify-center">
              <button className="bg-orange-600 w-fit px-3 py-2 text-lg font-medium rounded-sm">
                {editPlayer !== null ? "Edit" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;

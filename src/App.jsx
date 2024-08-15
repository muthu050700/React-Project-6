import { useEffect, useState } from "react";
import PlayerForm from "./Components/PlayerForm/PlayerForm";
import TeamMembersProfile from "./Components/TeamMembersProfile/TeamMembersProfile";
import Player from "./Components/PlayerForm/Player";
//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createPlayerDetailsAPI,
  deletePlayerDetailsAPI,
  readPlayerDetailsAPI,
  updatePlayerDetailsAPI,
} from "./apis";
import Spinner from "./Spinner/Spinner";

function App() {
  //player details state
  const [playerDetails, setPlayerDetails] = useState([]);

  // state for spinner
  const [spinner, setSpinner] = useState(false);
  // usestate to load the data
  useEffect(() => {
    loadPlayerDetails();
  }, []);

  //Editing the player
  const [editPlayer, setEditPlayer] = useState(null);

  // Function to add the details from form
  const addPlayerDetails = async (formDetails) => {
    setSpinner(true);
    const response = await createPlayerDetailsAPI(formDetails);
    setPlayerDetails([...playerDetails, response]);
    setSpinner(false);
  };
  //notify for adding player
  const notify = () => {
    toast.success("Your profile has been added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      delay: 1000,
    });
  };
  //read the player details
  const loadPlayerDetails = async () => {
    setSpinner(true);
    const res = await readPlayerDetailsAPI();
    setPlayerDetails(res);
    setSpinner(false);
  };

  //Deleting a player
  const handleDelete = async (id) => {
    setSpinner(true);
    const deletePlayerRes = await deletePlayerDetailsAPI(id);
    setPlayerDetails(
      playerDetails.filter((value) => value.id !== deletePlayerRes.id)
    );
    setSpinner(false);
  };
  // Delete Toast
  const deleteNotify = () => {
    toast.warn("Your profile removed successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      delay: 1000,
    });
  };
  // Edit Player
  const handleEdit = (id) => {
    setSpinner(true);
    const newPlayer = playerDetails.filter((value) => {
      return value.id === id;
    });
    setEditPlayer(...newPlayer);
    setSpinner(false);
  };
  // Edit toast
  const editNotify = () => {
    toast.info("You can update your profile details in the form.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  //success for edit
  const successEditNotify = () => {
    toast.info("Player details updated successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const formEditPlayer = async (formState, id) => {
    setSpinner(true);
    const editPlayer = await updatePlayerDetailsAPI(formState, id);
    const index = playerDetails.findIndex((val) => val.id === id);
    const tempProducts = [...playerDetails];
    tempProducts[index] = editPlayer;
    setPlayerDetails(tempProducts);
    setEditPlayer(null);
    setSpinner(false);
  };
  return (
    <>
      <TeamMembersProfile />
      <PlayerForm
        addPlayerDetails={addPlayerDetails}
        editPlayer={editPlayer}
        formEditPlayer={formEditPlayer}
        notify={notify}
        successEditNotify={successEditNotify}
      />
      <div className="bg-gray-900 pb-20">
        <div className="flex gap-20 justify-center flex-wrap px-4 md:px-3">
          {playerDetails.map((value) => {
            return (
              <Player
                key={value.id}
                {...value}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                editNotify={editNotify}
                deleteNotify={deleteNotify}
              />
            );
          })}
        </div>
      </div>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {spinner && <Spinner />}
    </>
  );
}

export default App;

// All the api calls will be here
const API_URL = "https://66bc47d124da2de7ff69d701.mockapi.io";
//player details

//create a player details - the request is post

export const createPlayerDetailsAPI = async (details) => {
  const response = await fetch(`${API_URL}/player_details`, {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await response.json();
};

//Read all the player details
export const readPlayerDetailsAPI = async () => {
  const response = await fetch(`${API_URL}/player_details`);
  return await response.json();
};

//Delete the player details

export const deletePlayerDetailsAPI = async (id) => {
  const response = await fetch(`${API_URL}/player_details/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

// update the player details

export const updatePlayerDetailsAPI = async (playerData, id) => {
  const response = await fetch(`${API_URL}/player_details/${id}`, {
    method: "PUT",
    body: JSON.stringify(playerData),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return await response.json();
};

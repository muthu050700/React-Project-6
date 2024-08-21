import axios from "axios";

// All the api calls will be here
const API_URL = "https://66bc47d124da2de7ff69d701.mockapi.io";
//instance
const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    user: "create player profile",
  },
});
//create a player details - the request is post

export const createPlayerDetailsAPI = async (details) => {
  const response = await instance.post(`/player_details`, details);
  return response.data;
};

//Read all the player details
export const readPlayerDetailsAPI = async () => {
  const response = await instance.get(`/player_details`);
  return response.data;
};

//Delete the player details

export const deletePlayerDetailsAPI = async (id) => {
  const response = await instance.delete(`/player_details/${id}`);
  return response.data;
};

// update the player details

export const updatePlayerDetailsAPI = async (playerData, id) => {
  const response = await instance.put(`/player_details/${id}`, playerData);
  return response.data;
};

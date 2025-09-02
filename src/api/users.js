import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Fetch single user
export const getUserById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

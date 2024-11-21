import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Your backend API URL
});

export default API;

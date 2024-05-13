import axios from "axios";

const token = JSON.parse(sessionStorage.getItem("token")) || "";

const clienteAxios = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const configHeader = {
  headers: {
    "content-type": "application/json",
    auth: `Bearer ${token}`,
  },
};

export const configHeaderImg = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default clienteAxios;

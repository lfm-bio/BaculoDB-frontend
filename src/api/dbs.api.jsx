import axios from "axios";

export const GetAllDbs = () => {
  return axios.get("http://localhost:8000/dbs/api/v1/dbs/AP006270/");
};

export const getGenome = (searchQuery) => {
  return axios.get(`http://localhost:8000/genome?search=${searchQuery}`); //devuelve array de objetos
  return axios.get("http://localhost:8000/protein?search=AP006270"); //devuelve array de objetos
};

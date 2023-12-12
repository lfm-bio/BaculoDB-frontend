import axios from "axios";

export const GetAllDbs = () => {
  return axios.get("http://localhost:8000/dbs/api/v1/dbs/AP006270/");
};

export const getGenome = () => {
  return axios.get("http://localhost:8000/dbs/api/v1/dbs?search=autographa"); //devuelve array de objetos
};

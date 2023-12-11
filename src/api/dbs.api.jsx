import axios from "axios";

export const GetAllDbs = () => {
  return axios.get("http://localhost:8000/dbs/api/v1/dbs/");
};

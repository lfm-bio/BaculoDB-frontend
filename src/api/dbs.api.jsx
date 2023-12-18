import axios from "axios";

export const searchByIDName = (searchQuery) => {
  let genome = `http://localhost:8000/genome?search=${searchQuery}`;
  let protein = `http://localhost:8000/protein?search=${searchQuery}`;
  const promise1 = axios.get(genome);
  const promise2 = axios.get(protein);
  const searchData = Promise.all([promise1, promise2]);

  return searchData;
};

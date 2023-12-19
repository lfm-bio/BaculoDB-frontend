import axios from "axios";

export const searchByIDName = (searchQuery) => {
  let genome = `http://localhost:8000/genome?search=${searchQuery}`;
  let protein = `http://localhost:8000/protein?search=${searchQuery}`;
  const promGenome = axios.get(genome);
  const promProtein = axios.get(protein);
  const searchData = Promise.all([promGenome, promProtein]);

  return searchData;
};

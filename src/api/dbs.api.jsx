import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:8000",
};

const apiInstance = axios.create(defaultOptions);

export const searchByIDName = (searchQuery) => {
  const promGenome = apiInstance.get("genome", {
    params: {
      search: searchQuery,
    },
  });

  const promProtein = apiInstance.get("protein", {
    params: {
      search: searchQuery,
    },
  });

  const searchData = Promise.all([promGenome, promProtein]);

  return searchData;
};

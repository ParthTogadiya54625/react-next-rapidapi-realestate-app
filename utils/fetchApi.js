import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "a58ec6c4ddmshb45396bfe3cb149p1f1d86jsn4da7414d5771",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

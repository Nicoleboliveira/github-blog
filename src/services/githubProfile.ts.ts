import axios from "axios";

export const githubProfileAPI = axios.create({
  baseURL: "https://api.github.com/users/Nicoleboliveira",
});

// src/services/github.ts
import axios from "axios";

const GITHUB_USERNAME = "Nicoleboliveira";

export const githubAPI = axios.create({
  baseURL: `https://api.github.com/users/${GITHUB_USERNAME}`,
});

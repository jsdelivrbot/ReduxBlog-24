import axios from "axios";

export const FETCH_POST = "fetch_posts";

export function fetchPost() {
  const BASE_URL = "http://reduxblog.herokuapp.com/api";
  const API_KEY = "?key=blogapp456";
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

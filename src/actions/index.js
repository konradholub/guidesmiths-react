import axios from "axios";
import { SET_PHONES, FETCH_PHONES_API_START, FETCH_PHONES_API_FINISHED } from "./types";

export function fetchPhones() {
  return function(dispatch) {
    dispatch({type: FETCH_PHONES_API_START});
    return axios.get("http://localhost:8080/phones").then(({ data }) => {
      dispatch(setPhones(data));
      dispatch({type: FETCH_PHONES_API_FINISHED});
    });
  };
}

function setPhones(data) {
  return {
    type: SET_PHONES,
    payload: data
  };
}
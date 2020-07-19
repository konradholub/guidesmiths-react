import { SET_PHONES, FETCH_PHONES_API_START, FETCH_PHONES_API_FINISHED } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_PHONES:
      return { ...state, data: action.payload };
    case FETCH_PHONES_API_START:
      return { ...state, isPhonesLoading: true };
    case FETCH_PHONES_API_FINISHED:
      return { ...state, isPhonesLoading: false };
    default:
      return state;
  }
}

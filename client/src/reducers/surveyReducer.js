import _ from "lodash";
import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  DELETE_SURVEY,
  EDIT_SURVEY,
  FETCH_USERS_SURVEYS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_USERS_SURVEYS:
      return { ...state, ..._.mapKeys(action.payload, "user") };
    case FETCH_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SURVEY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

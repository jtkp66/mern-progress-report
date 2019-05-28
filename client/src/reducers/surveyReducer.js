import _ from "lodash";
import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  DELETE_SURVEY,
  EDIT_SURVEY,
  FETCH_ALL_SURVEYS,
  SURVEY_ERROR
} from "../actions/types";

const initialState = {
  surveys: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { ...state, ..._.mapKeys(action.payload, "_id"), loading: false };
    case FETCH_ALL_SURVEYS:
      return { ...state, ..._.mapKeys(action.payload, "_id"), loading: false };

    case FETCH_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SURVEY:
      return _.omit(state, action.payload);
    case SURVEY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

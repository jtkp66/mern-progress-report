import axios from "axios";
import history from "../history";
import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  DELETE_SURVEY,
  EDIT_SURVEY
} from "./types";

export const createSurvey = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axios.post("/surveys", { ...formValues, userId });

  dispatch({ type: CREATE_SURVEY, payload: response.data });
  history.push("/");
};

export const fetchSurveys = () => async dispatch => {
  const response = await axios.get("/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: response.data });
};

export const fetchSurvey = id => async dispatch => {
  const response = await axios.get(`/surveys/${id}`);

  dispatch({ type: FETCH_SURVEY, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await axios.patch(`/surveys/${id}`, formValues);

  dispatch({ type: EDIT_SURVEY, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await axios.delete(`/surveys/${id}`);

  dispatch({ type: DELETE_SURVEY, payload: id });
  history.push("/");
};

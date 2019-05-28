import axios from "axios";
import { setAlert } from "./alert";
import history from "../history";
import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_ALL_SURVEYS,
  FETCH_SURVEY,
  DELETE_SURVEY,
  EDIT_SURVEY
} from "./types";

export const createSurvey = formValues => async (dispatch, getState) => {
  const { user } = getState().auth;
  const response = await axios.post("/api/surveys", { ...formValues, user });

  dispatch({ type: CREATE_SURVEY, payload: response.data });
  dispatch(setAlert("Survey Created", "success"));
};

export const fetchSurveys = () => async dispatch => {
  const response = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: response.data });
};

export const fetchAllSurveys = () => async dispatch => {
  const response = await axios.get("/api/surveys/all");

  dispatch({ type: FETCH_ALL_SURVEYS, payload: response.data });
};

export const fetchSurvey = id => async dispatch => {
  const response = await axios.get(`/api/surveys/${id}`);

  dispatch({ type: FETCH_SURVEY, payload: response.data });
};

export const editSurvey = (id, formValues) => async dispatch => {
  const response = await axios.patch(`/api/surveys/${id}`, formValues);

  dispatch({ type: EDIT_SURVEY, payload: response.data });
  history.push("/");
};

export const deleteSurvey = id => async dispatch => {
  await axios.delete(`/api/surveys/delete/${id}`);

  dispatch({ type: DELETE_SURVEY, payload: id });
  history.push("/dashboard");
};

export const adminDeleteSurvey = id => async dispatch => {
  await axios.delete(`/api/surveys/delete/${id}`);

  dispatch({ type: DELETE_SURVEY, payload: id });
  history.push("/admin/dashboard");
};

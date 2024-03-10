import { apiCall } from "./api/api";
import { Dispatch } from "redux";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

type ChangeSearchFieldAction = {
  type: typeof CHANGE_SEARCHFIELD;
  payload: string;
};

type RequestRobotsPendingAction = {
  type: typeof REQUEST_ROBOTS_PENDING;
};

type RequestRobotsSuccessAction = {
  type: typeof REQUEST_ROBOTS_SUCCESS;
  payload: any;
};

type RequestRobotsFailedAction = {
  type: typeof REQUEST_ROBOTS_FAILED;
  payload: string;
};

export type ActionTypes =
  | ChangeSearchFieldAction
  | RequestRobotsPendingAction
  | RequestRobotsSuccessAction
  | RequestRobotsFailedAction;

export const setSearchField = (text: string): ChangeSearchFieldAction => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestRobots = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  try {
    const data = await apiCall("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: String(error) });
  }
};

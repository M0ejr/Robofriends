import { combineReducers } from 'redux';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

type SearchRobotsState = {
  searchField: string;
}

export const searchRobots = (
  state: SearchRobotsState = { searchField: '' },
  action: { type: string; payload?: any }
): SearchRobotsState => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

interface RequestRobotsState {
  robots: any[]; // Replace 'any' with the actual type of robots
  isPending: boolean;
  error?: string;
}

export const requestRobots = (
  state: RequestRobotsState = { robots: [], isPending: true },
  action: { type: string; payload?: any }
): RequestRobotsState => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

export type RootState = ReturnType<typeof rootReducer>;

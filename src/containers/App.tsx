import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { RootState } from "../reducers";
import { createSelector } from "reselect";
import "./App.css";

type Robot = {
  id: number;
  name: string;
  email: string;
};

const selectSearchField = (state: RootState) => state.searchRobots.searchField;
const selectRobots = (state: RootState) => state.requestRobots.robots;
const selectIsPending = (state: RootState) => state.requestRobots.isPending;

const mapStateToProps = createSelector(
  selectSearchField,
  selectRobots,
  selectIsPending,
  (searchField, robots, isPending) => ({
    searchField,
    robots,
    isPending,
  })
);

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { searchField, robots, isPending } = useSelector(mapStateToProps);

  useEffect(() => {
    dispatch(requestRobots() as any);
  }, [dispatch]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchField(event.target.value));
  };

  const filteredRobots = robots.filter((robot: Robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 style={{ fontSize: "50px" }}>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? (
          <h1 className="tc white">Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps)(App);

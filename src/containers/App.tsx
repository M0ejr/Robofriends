import { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { setSearchField, requestRobots } from "../actions";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { RootState } from "../reducers";
import "./App.css";

type AppProps = {
  searchField: string;
  robots: Robot[];
  isPending: boolean;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRequestRobots: () => void;
};

type Robot = {
  id: number;
  name: string;
  email: string;
};

const mapStateToProps = (state: RootState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  return {
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots() as any),
  };
};

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import axios from "axios";

import SearchForm from "./SearchFrom";

class App extends React.Component {
  onSearchSubmit = async (userInputs) => {
    // sending data to backend to create the api call for us as there is a decent amount of logic involved as well as
    // might want to implement caching and might need some authentication for some paid APIs so probably should be done
    // from backend so to hide API credentials from users
    const response = await axios.post(
      "http://localhost:3001/api/topten",
      userInputs
    );

    // todo: when we get the top ten cheapest we need to set them as state
    console.log(response);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "4%" }}>
        <SearchForm onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

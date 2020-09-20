import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  state = {
    breweries: [],
  };
  async componentDidMount() {
    await Axios.get(`https://api.openbrewerydb.org/breweries`).then((res) => {
      console.log(res.data);
      this.setState({ breweries: res.data });
    });
  }
  showBrewery = () => {
    return this.state.breweries.map((eachBrewery) => {
      return (
        <ul>
          <li> Name of Brewery: {eachBrewery.name} </li>
          <li> Type of Brew: {eachBrewery.brewery_type} </li>
          <li>
            {" "}
            Address: {eachBrewery.street} {eachBrewery.city} {eachBrewery.state}
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Brewery</h1>
        {this.showBrewery()}
      </div>
    );
  }
}

export default App;

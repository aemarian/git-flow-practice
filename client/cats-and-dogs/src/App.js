import React, { Component } from "react";
import "./styles/styles.css";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
// import Footer from "./components/Footer";

const URL_CAT = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "8a71f945-c0e3-45b5-b6d5-cf242e16a598";

export default class App extends Component {
  state = {
    cat: [],
    image: ""
  };

  componentDidMount() {
    axios
      .get(`${URL_CAT}`, {
        headers: { "X-Api-Key": `${API_KEY}` }
      })
      .then(response => {
        this.setState({ cat: response.data });
        this.setState({ image: response.data[0].url });
      });
  }

  render() {
    if (this.state.image === undefined) {
      return <h1>Loading...</h1>;
    } else {
      console.log(this.state.image);
      return (
        <>
          <Header />
          <div className="app">
            <div className="app__pic-container">
              <img
                src={this.state.image}
                className="app__main-pic"
                alt="1"
              ></img>
            </div>
            <div className="app__buttons">
              <button className="app__keep-btn">KEEPIN IT</button>
              <button className="app__pass-btn">MOVING ON</button>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      );
    }
  }
}

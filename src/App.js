import React, { Component } from "react";
import Nav from "./components/Nav";
import RestPocket from "./components/RestPocket";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Features />
        <RestPocket />
        <Footer />
      </div>
    );
  }
}

export default App;

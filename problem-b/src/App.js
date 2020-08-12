import React, { Component } from 'react'; //import React Component
import "./style.css";
import _ from "lodash";

class App extends Component {
  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
            </div>
            <BreedNav breeds = { _.groupBy(this.props.pets, Object.keys()) }/>
            <AboutNav />
            <div id="petList" className="col-9">

            </div>
          </div>
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

export default App;

class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    );
  }
}

class BreedNav extends Component {
  render() {
    console.log(this.props.breeds)
    const breedListItems = this.props.breeds.map((breed) => {
      return <li key={ breed }><a href="#/">{ breed }</a></li>
    });

    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          { breedListItems }
        </ul>
      </nav>
    );
  }
}

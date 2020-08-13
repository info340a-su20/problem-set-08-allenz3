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
            <BreedNav breeds={Object.keys(_.groupBy(this.props.pets, "breed"))} />
            <AboutNav />
            <div id="petList" className="col-9">
              <PetList pets={this.props.pets} />
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
    const breedListItems = this.props.breeds.map((breed) => {
      return <li key={breed}><a href="#/">{breed}</a></li>
    });

    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {breedListItems}
        </ul>
      </nav>
    );
  }
}

class PetCard extends Component {
  render() {
    const pet = this.props.pet;
    return (
      <div className="card">
        <img className="card-img-top" src={pet.img} alt={pet.name} />
        <div className="card-body">
          <h3 className="card-title">{pet.name}</h3>
          <p className="card-text">{pet.sex + " " + pet.breed}</p>
        </div>
      </div>
    );
  }
}

class PetList extends Component {
  render() {
    const petList = this.props.pets.map((pet) =>
      <PetCard key={pet.name} pet={pet} />
    )
    return (
      <div>
        <h2>Dogs for Adoption</h2>
        <i>{petList}</i>
      </div>
    );
  }
}

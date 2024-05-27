import React, { Component } from "react";

class Prijavljivanje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: "",
      email: "",
      komentar: "",
      komentari: [
        {
          ime: "John",
          email: "john@example.com",
          komentar: "Ovo je sjajna stranica!",
          vrijeme: "19.05.2024. 10:07:36",
        },
        {
          ime: "Jane",
          email: "jane@example.com",
          komentar: "Sviđa mi se dizajn.",
          vrijeme: "20.05.2024. 15:45:35",
        },
      ],
      prikaziKomentare: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContentEditableInput =
      this.handleContentEditableInput.bind(this);
    this.togglePrikazKomentara = this.togglePrikazKomentara.bind(this);
  }

  // Metoda za upravljanje promjenom u input poljima
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Metoda za rukovanje slanjem forme
  handleSubmit(event) {
    event.preventDefault();
    const { ime, email, komentar } = this.state;
    const timestamp = new Date().toLocaleString();
    const noviKomentar = {
      ime: ime,
      email: email,
      komentar: komentar,
      vrijeme: timestamp,
    };

    this.setState(function (prevState) {
      return {
        komentari: prevState.komentari.concat(noviKomentar),
        ime: "",
        email: "",
        komentar: "",
      };
    });
  }

  // Metoda za rukovanje unosom teksta u contentEditable divu
  handleContentEditableInput(event) {
    this.setState({ komentar: event.target.innerText });
  }

  // Metoda za prebacivanje prikaza komentara
  togglePrikazKomentara() {
    this.setState(function (prevState) {
      return { prikaziKomentare: !prevState.prikaziKomentare };
    });
  }

  render() {
    return (
      <div className="prijavljivanje">
        <h2>Podijelite svoje mišljenje</h2>
        <div className="details">
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label>
                  Ime: <br />
                  <input
                    type="text"
                    name="ime"
                    placeholder="Jon Doe"
                    value={this.state.ime}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </label>
                <label>
                  Email: <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@gmail.com"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </label>
              </div>
              <label>
                Komentar: <br />
                <textarea
                  name="komentar"
                  placeholder="Unesite komentar"
                  value={this.state.komentar}
                  onChange={this.handleInputChange}
                />
                <br />
              </label>
              <button type="submit" className="submit-button">
                Pošalji
              </button>
            </form>
            <button
              className="comments-button"
              onClick={this.togglePrikazKomentara}
            >
              {this.state.prikaziKomentare
                ? "Sakrij komentare"
                : "Prikaži komentare"}
            </button>
          </div>
          <div className="input-preview desno">
            <h3>Vaš unos:</h3>
            <p>Ime: {this.state.ime}</p>
            <p>Email: {this.state.email}</p>
            <p>Komentar: {this.state.komentar}</p>
          </div>
        </div>
        {this.state.prikaziKomentare && (
          <div className="komentari-container">
            <h2>Komentari:</h2>
            <ul>
              {this.state.komentari.map(function (komentar, index) {
                return (
                  <li key={index}>
                    <p>{komentar.ime}</p>
                    <p>{komentar.komentar}</p>
                    <p>Vrijeme: {komentar.vrijeme}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Prijavljivanje;

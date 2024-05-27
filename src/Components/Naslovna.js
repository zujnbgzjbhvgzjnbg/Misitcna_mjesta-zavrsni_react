import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bg from "../mainBg.jpeg";
import Prijavljivanje from "./Prijavljivanje";
import LogoSlika from "../llogo.png";
import GalerijaSlika from './GalerijaSlika';

function Naslovna() {
  return (
    <div className="naslovna pozadina-wrapper">
      <img src={Bg} className="pozadina" alt="Pozadina" />
      <Navbar />
      <header className="header">
          <h1 className="h1">Mistična mjesta</h1>
      </header>

      <div className="div1">
        <section className="intro">
          <h2 className="h2">Dobrodošli na našu stranicu</h2>
          <p className="paragraph">
            Ovdje ćete pronaći popis mističnih mjesta iz legendi i mitologija
            širom svijeta. Naša misija je pružiti vam informacije o tim
            fascinantnim lokacijama i pričama koje su povezane s njima.
          </p>
          <p className="paragraph">
            Istražite razne mitološke svjetove, otkrijte tajne drevnih
            civilizacija i uronite u čarobne priče koje su oblikovale kulture
            diljem svijeta.
          </p>
        </section>

        <section className="famous-places">
          <h2 className="h2">Najpoznatija mistična mjesta</h2>
          <p className="paragraph">
            Istražite najpoznatija mistična mjesta koja su obavijena legendama i
            mitovima. Ova mjesta imaju posebno mjesto u različitim religijama i
            mitologijama.
          </p>
          <ul className="list">
            <li>Duat, Egipat</li>
            <li>Olimp, Grčka</li>
            <li>Valhala, Nordijska mitologija</li>
            <li>Planina Kailash, Indijska mitologija</li>
            <li>Planina Kunlun, Kineska mitologija</li>
            <li>Raj/Nebo, Abrahamovske religije</li>
            <li>Camelot, Keltska mitologija</li>
          </ul>

          <Link to="/GalerijaSlika" className="nav-links">
            Galerija
          </Link>

        </section>

        <section id="o-nama" className="about-us">
          <h2 className="h2">O nama</h2>
          <div className="about-us-content">
            <div className="about-us-text">
              <p className="paragraph">
                Mi smo strastveni istraživači mitologije i legendi koji su
                odlučili podijeliti svoje znanje i otkrića s vama. Naš cilj je
                oživjeti svijet mističnih mjesta i omogućiti vam da se zaronite
                u čarobni svijet mitova i legendi.
              </p>
              <p className="paragraph">
                Naš logo, predstavljen zlatnim logotipom s riječima "mystical horizons", ne samo da označava našu strast prema istraživanju mitologije i legendi, već također simbolizira sofisticiranost i tajnovitost koja okružuje mistična mjesta koja istražujemo. S paletom boja koje podsjećaju na povezanost s prirodom, poput zlata, kreme i tamno smeđe, logo poziva na istraživanje neistraženih horizonta i otkrivanje skrivenih tajni. Uz riječi "mystical horizons", naglašavamo našu viziju beskrajnih mogućnosti i neprestanog otkrivanja. Ovaj prepoznatljivi logo simbolizira našu predanost istraživanju i oživljavanju svijeta mitova i legendi.
              </p>
            </div>
            <div className="imagelogo">
              <img src={LogoSlika} alt="Zlatni globus" />
            </div>
          </div>
        </section>
      </div>

      <div className="prijava">
        <Prijavljivanje />
      </div>

      <div id="kontakt">
        <Footer />
      </div>
    </div>
  );
}

export default Naslovna;

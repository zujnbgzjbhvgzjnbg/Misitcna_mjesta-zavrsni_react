import React, { useState } from "react";
import Valhala from "../valhala.jpg";
import Raj from "../raj.jpg";
import Olimp from "../olimp.png";
import Kunlun from "../kunlun.jpg";
import Kailash from "../kaliash.jpg";
import Duat from "../duat.png";
import Camelot from "../camelot.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const slike = [Valhala, Raj, Olimp, Kunlun, Kailash, Duat, Camelot];
const nazivi = ["Valhala", "Raj", "Olimp", "Kunlun", "Kailash", "Duat", "Camelot"];

function Galerija() {
  const [trenutnaSlika, postaviTrenutnuSliku] = useState(0);

  const prikaziPrethodnuSliku = () => {
    const prethodna = (trenutnaSlika - 1 + slike.length) % slike.length;
    postaviTrenutnuSliku(prethodna);
  };

  const prikaziSljedećuSliku = () => {
    const sljedeća = (trenutnaSlika + 1) % slike.length;
    postaviTrenutnuSliku(sljedeća);
  };

  return (
    <div className="galery">
    <Navbar />
    <div className="div1">
    <div className="galerija">
      <div className="slike">
        <img src={slike[trenutnaSlika]} alt={nazivi[trenutnaSlika]} />
        <div className="naziv-slike">{nazivi[trenutnaSlika]}</div>
        <div className="strelice">
          <button onClick={prikaziPrethodnuSliku}>&lt;</button>
          <button onClick={prikaziSljedećuSliku}>&gt;</button>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Galerija;

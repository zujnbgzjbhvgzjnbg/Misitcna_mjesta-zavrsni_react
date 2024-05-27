import React from "react";
import TablicaMjesta from "./TablicaMjesta";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ListaMjesta() {
  const egipatskaMitologija = {
    name: "Egipatska mitologija",
    data: [
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Akhet_(hieroglyph)"> Akhet </a>
        ),
        Description:
          "Egipatski hijeroglif koji predstavlja izlazak sunca iznad planine. Preveden je kao horizont ili mjesto na nebu gdje sunce izlazi.",
      },
      {
        Name: <a href="https://en.wikipedia.org/wiki/Aaru"> Aaru </a>,
        Description:
          "Raj na nebu gdje vlada Oziris u staroegipatskoj mitologiji.",
      },
      {
        Name: <a href="https://en.wikipedia.org/wiki/Benben"> Benben </a>,
        Description:
          "Gomila koja se uzdigla iz prapovijesnih voda Nua na kojoj je stvoriteljsko božanstvo Atum smjestilo u stvaranju mita o heliopolitanskom obliku drevne egipatske religije.",
      },
      {
        Name: <a href="https://en.wikipedia.org/wiki/Duat"> Duat </a>,
        Description: "Podzemlje i boravište mrtvih u staroegipatskoj religiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/The_Indestructibles">
            {" "}
            Neuništivi{" "}
          </a>
        ),
        Description:
          "Dvije svijetle zvijezde koje su, u to vrijeme, uvijek mogle biti viđene kako kruže oko Sjevernog pola prema drevnim egipatskim astronomima.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Land_of_Manu">
            {" "}
            Zemlja Manua{" "}
          </a>
        ),
        Description: "Zapadno boravište sunčevog boga Ra.",
      },
      {
        Name: <a href="https://en.wikipedia.org/wiki/Nu_(mythology)"> Nu </a>,
        Description:
          "Prapovijesne vode iz kojih se Benben pojavio na početku svemira, također smatra se bogom Nu.",
      },
    ],
  };

  const grčkaMitologija = {
    name: "Grčka mitologija",
    data: [
      {
        Name: (
          <a href="/wiki/Arcadia_(utopia)" title="Arcadia (utopia)">
            Arkadija
          </a>
        ),
        Description:
          "Vizija pastirstva i harmonije s prirodom, izvedena iz grčke pokrajine Arkadije koja datira iz antike.",
      },
      {
        Name: (
          <a href="/wiki/Asphodel_Meadows" title="Asphodel Meadows">
            Polja asfodela
          </a>
        ),
        Description:
          "Dio podzemlja gdje su obične duše poslane da žive nakon smrti.",
      },
      {
        Name: (
          <a href="/wiki/Atlantis" title="Atlantis">
            Atlantis
          </a>
        ),
        Description:
          "Legendaran (i gotovo arhetipski) izgubljeni kontinent koji je navodno potonuo u Atlantski ocean.",
      },
      {
        Name: (
          <a href="/wiki/Cloud_cuckoo_land" title="Cloud cuckoo land">
            Nebeski grad
          </a>
        ),
        Description:
          "Savršeni grad između oblaka u predstavi Ptice Aristofana.",
      },
      {
        Name: (
          <a href="/wiki/Chryse_and_Argyre" title="Chryse and Argyre">
            Hrisa i Argyre
          </a>
        ),
        Description:
          "Par legendarnih otoka, smještenih u Indijskom oceanu i navodno izrađenih od zlata (chrysos) i srebra (argyros).",
      },
      {
        Name: (
          <a href="/wiki/Elysium" title="Elysium">
            Elizij
          </a>
        ),
        Description:
          "U grčkoj mitologiji, konačno počivalište duša herojskih i vrlinskih.",
      },
      {
        Name: (
          <a href="/wiki/Fortunate_Isles" title="Fortunate Isles">
            Otok sretnika
          </a>
        ),
        Description:
          "Otok u Atlantskom oceanu, različito tretiran kao jednostavna geografska lokacija i kao zimski raj bez zime nastanjen herojima grčke mitologije.",
      },
      {
        Name: (
          <a
            href="/wiki/Garden_of_the_Hesperides"
            class="mw-redirect"
            title="Garden of the Hesperides"
          >
            Vrt Hesperida
          </a>
        ),
        Description: "Sveti vrt Here odakle su bogovi dobili besmrtnost.",
      },
      {
        Name: (
          <a href="/wiki/Hyperborea" title="Hyperborea">
            Hyperborea
          </a>
        ),
        Description:
          "Dom Hyperboreansa na dalekom sjeveru Grčke ili južne Europe.",
      },
      {
        Name: (
          <a href="/wiki/Laestrygon" class="mw-redirect" title="Laestrygon">
            Laistrygon
          </a>
        ),
        Description:
          "Dom plemena divovskih kanibala s kojima se Odisej susreo na putu kući s Trojanskog rata.",
      },
      {
        Name: (
          <a href="/wiki/Meropis" title="Meropis">
            Meropis
          </a>
        ),
        Description:
          "Gigantski otok stvoren isključivo kao parodija na Platonovu Atlantidu.",
      },
      {
        Name: (
          <a href="/wiki/Mount_Olympus" title="Mount Olympus">
            Olimp
          </a>
        ),
        Description:
          "„Olympos“ bio je naziv doma Dvanaest olimpijskih bogova drevnog grčkog svijeta.",
      },
      {
        Name: (
          <a href="/wiki/Nysa_(mythology)" title="Nysa (mythology)">
            Nysa
          </a>
        ),
        Description: "Prekrasna dolina puna nimfi.",
      },
      {
        Name: (
          <a href="/wiki/Oceanus#Geography" title="Oceanus">
            Okeanos
          </a>
        ),
        Description:
          "Kozmička rijeka koja opasuje Zemlju u antičkoj grčkoj kosmologiji, ponekad prikazana kao jedan od Titanovih bogova.",
      },
      {
        Name: (
          <a href="/wiki/Panchaia_(island)" title="Panchaia (island)">
            Panchaia (Pangaia)
          </a>
        ),
        Description:
          "Skupina otoka južno od Arapskog poluotoka naseljena nekoliko plemena i bogata mirisnim uljima. Pretpostavlja se da je to rodno mjesto olimpijskih bogova.",
      },
      {
        Name: (
          <a href="/wiki/Tartarus" title="Tartarus">
            Tartaros
          </a>
        ),
        Description: "Jama u podzemlju za osuđene duše.",
      },
      {
        Name: (
          <a
            href="/wiki/Themiscyra_(mythology)"
            class="mw-redirect"
            title="Themiscyra (mythology)"
          >
            Themiskyra
          </a>
        ),
        Description: "Glavni grad Amazona u grčkoj mitologiji.",
      },
      {
        Name: "Podzemlje",
        Description:
          "Sastavljeno od carstava Elysijskih polja, Polja asfodela i Tartarosa.",
      },
    ],
  };

  const nordiskaMitologija = {
    name: "Nordijska mitologija",
    data: [
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Alfheim" title="Alfheim">
            {" "}
            Alfheim{" "}
          </a>
        ),
        Description: "Zemlja vila u nordijskoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Asgard" title="Asgard">
            Asgard
          </a>
        ),
        Description:
          "Visoko smješteni grad bogova, izgrađen od Odina, glavnog boga nordijskog panteona.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Biarmaland"
            class="mw-redirect"
            title="Biarmaland"
          >
            Biarmaland
          </a>
        ),
        Description:
          "Geografsko područje oko Bijelog mora na sjevernom dijelu (europske) Rusije, spominjano u nordijskim sagama.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Fositesland"
            class="mw-redirect"
            title="Fositesland"
          >
            Fositesland
          </a>
        ),
        Description: "Kraljevstvo Forsetija, boga pravde.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Gj%C3%B6ll" title="Gjöll">
            Gjöll
          </a>
        ),
        Description:
          "Rijeka koja razdvaja žive od mrtvih u norveškoj mitologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Hel_(location)"
            title="Hel (location)"
          >
            Hel (heimr)
          </a>
        ),
        Description: "Podzemlje u norveškoj mitologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Hvergelmir"
            title="Hvergelmir"
          >
            Hvergelmir
          </a>
        ),
        Description: "Glavni izvor u norveškoj mitologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Jotunheim"
            class="mw-redirect"
            title="Jotunheim"
          >
            Jotunheim
          </a>
        ),
        Description: "Zemlja divova u norveškoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Kvenland" title="Kvenland">
            Kvenland
          </a>
        ),
        Description:
          "Geografsko područje spominjano u nekoliko srednjovjekovnih tekstova kao i u nordijskim sagama. Točna lokacija Kvenlanda je nepoznata, iako postoje nekoliko konkurentnih teorija koje ga smještaju ili na sjeverni dio skandinavskog poluotoka ili na jugozapadni dio onoga što je danas Finska.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/M%C3%ADmisbrunnr"
            title="Mímisbrunnr"
          >
            Mímisbrunnr
          </a>
        ),
        Description:
          "Izvor povezan s bićem Mímirom, smješten ispod svjetskog drveta Yggdrasila.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Muspelheim"
            title="Muspelheim"
          >
            Muspelheim
          </a>
        ),
        Description: "Zemlja vatre u norveškoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Niflheim" title="Niflheim">
            Niflheim
          </a>
        ),
        Description: "Svijet hladnoće u norveškoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Niflhel" title="Niflhel">
            Niflhel
          </a>
        ),
        Description: "Hladno podzemlje u norveškoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Norumbega" title="Norumbega">
            Norumbega
          </a>
        ),
        Description:
          "Legendarno naselje na sjeveroistoku Sjeverne Amerike, povezano s pokušajima dokazivanja Vikingovih pohoda u Novoj Engleskoj.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Svart%C3%A1lfaheimr"
            class="mw-redirect"
            title="Svartálfaheimr"
          >
            Svartálfaheimr
          </a>
        ),
        Description: "Zemlja Tamnih vila u norveškoj mitologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org//wiki/Ur%C3%B0arbrunnr"
            title="Urðarbrunnr"
          >
            Urðarbrunnr
          </a>
        ),
        Description: "Izvor u norveškoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Valhalla" title="Valhalla">
            Valhalla
          </a>
        ),
        Description:
          "(iz staronordijskog Valhöll 'dvorac ubijenih') je veličanstvena, ogromna dvorana smještena u Asgardu, pod vlašću boga Odina.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Vanaheimr" title="Vanaheimr">
            Vanaheimr
          </a>
        ),
        Description:
          "Zemlja Vanira, još jednog plemena bogova, prema nordijskim legendama.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org//wiki/Yggdrasil" title="Yggdrasil">
            Yggdrasil
          </a>
        ),
        Description:
          "Gigantsko i centralno sveto drvo u nordijskoj kosmologiji.",
      },
    ],
  };

  const indijskaMitologija = {
    name: "Indijska mitologija",
    data: [
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Agartha" title="Agartha">
            Agartha
          </a>
        ),
        Description: "Legendaran grad smješten u središtu Zemlje.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Amaravati_(mythology)"
            title="Amaravati (mythology)"
          >
            Amaravati
          </a>
        ),
        Description: "Glavni grad Svarge, boravište deva, pod vlašću Indre.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Ayotha_Amirtha_Gangai"
            title="Ayotha Amirtha Gangai"
          >
            Ayotha Amirtha Gangai
          </a>
        ),
        Description: "Važna rijeka u Ayyavazhi mitologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Brahmapura"
            class="mw-redirect"
            title="Brahmapura"
          >
            Brahmaloka
          </a>
        ),
        Description: "Boravište Brahma, hinduističkog boga stvaranja.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Himavanta" title="Himavanta">
            Himavanta
          </a>
        ),
        Description: "Legendarna šuma koja se nalazi na brdu Himalaji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Jambudv%C4%ABpa"
            title="Jambudvīpa"
          >
            Jambudvīpa
          </a>
        ),
        Description:
          "Naziv za zemaljski svemir u hinduističkim, budističkim i džainskim tradicijama.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Mount_Kailash"
            title="Mount Kailash"
          >
            Kailasha
          </a>
        ),
        Description: "Nebo boravka Šive.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Ketumati" title="Ketumati">
            Ketumati
          </a>
        ),
        Description: "Čista zemlja koja pripada Maitreji unutar budizma.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Kshira_Sagara"
            title="Kshira Sagara"
          >
            Kshira Sagara
          </a>
        ),
        Description: "Božanski ocean mlijeka u hinduističkoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Manidvipa" title="Manidvipa">
            Manidvipa
          </a>
        ),
        Description: "Boravište vrhovne božice u hinduizmu.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Mount_Mandara"
            title="Mount Mandara"
          >
            Planina Mandara
          </a>
        ),
        Description: "Sveta planina spomenuta u Puranama.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Mount_Meru" title="Mount Meru">
            Planina Meru
          </a>
        ),
        Description:
          "Sveta petvršna planina hinduističke, džainske i budističke kozmologije. Smatra se središtem svih fizičkih, metafizičkih i duhovnih svjetova.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Naraka" title="Naraka">
            Naraka
          </a>
        ),
        Description:
          "Područje slično paklu u indijskim religijama gdje se duše privremeno kažnjavaju prije reinkarnacije.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Nirvana" title="Nirvana">
            Nirvana
          </a>
        ),
        Description:
          "Konačno stanje oslobođenja (oslobađanje od ponovljenih rođenja) često povezano s hinduizmom, džainizmom i budizmom.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Patala" title="Patala">
            Patala
          </a>
        ),
        Description: "Podzemni svijet indijskih religija.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Samavasarana"
            title="Samavasarana"
          >
            Samavasarana
          </a>
        ),
        Description: "Mjesto susreta tirthankara u džainizmu.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Sanzu_River"
            title="Sanzu River"
          >
            Sanzu River
          </a>
        ),
        Description: "Mitološka rijeka u japanskom budizmu.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Shakdvipa" title="Shakdvipa">
            Shakadvipa
          </a>
        ),
        Description:
          "Kopneni masiv zapadno od Urala u hinduističkoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Shambhala" title="Shambhala">
            Shambhala
          </a>
        ),
        Description:
          "U tibetanskoj budističkoj tradiciji, kraljevstvo skriveno negdje u Himalajama; Teozofi ga smatraju domom na eterskoj razini upravitelja božanstva Zemlje, Sanat Kumare.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Siddhashila"
            title="Siddhashila"
          >
            Siddhashila
          </a>
        ),
        Description:
          "Mjesto na kojem duše koje su pobjegle iz ciklusa reinkarnacije i postigle mokšu idu prema kozmologiji džainizma.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Svarga" title="Svarga">
            Svarga
          </a>
        ),
        Description: "Boravište deva u hinduizmu.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Thuvaraiyam_Pathi"
            title="Thuvaraiyam Pathi"
          >
            Thuvaraiyam Pathi
          </a>
        ),
        Description:
          "U Ayyavazhi mitologiji, to je potonuli otok udaljen oko 240 km (150 milja) uz južnu obalu Indije.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Tr%C4%81yastri%E1%B9%83%C5%9Ba"
            title="Trāyastriṃśa"
          >
            Trāyastriṃśa
          </a>
        ),
        Description: "Važan svijet deva u budističkoj kozmologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Urdhva_lokas"
            title="Urdhva lokas"
          >
            Urdhvaloka
          </a>
        ),
        Description: "Sedam gornjih svjetova spomenutih u Puranama.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Uttarakuru" title="Uttarakuru">
            Uttarakuru
          </a>
        ),
        Description: "Naziv kontinenta (dvipa) u indijskim religijama.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Vaikuntha" title="Vaikuntha">
            Vaikuntha
          </a>
        ),
        Description: "Nebo boravka Višnua.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Vaitarani_(mythology)"
            title="Vaitarani (mythology)"
          >
            Vaitarani
          </a>
        ),
        Description:
          "Rijeka smještena u paklu spomenuta u Garuda Purani i raznim drugim hinduističkim religijskim tekstovima.",
      },
    ],
  };

  const istočnoAzijskaMitologija = {
    name: "Istočnoazijska mitologija",
    data: [
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Diyu" title="Diyu">
            Diyu
          </a>
        ),
        Description: (
          <>
            Područje mrtvih ili{" "}
            <a href="https://en.wikipedia.org/wiki/Hell" title="Hell">
              Pakao
            </a>{" "}
            u{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chinese_mythology"
              title="Chinese mythology"
            >
              kineskoj mitologiji
            </a>
            .
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Eight_Pillars"
            title="Eight Pillars"
          >
            Osmo stubište
          </a>
        ),
        Description: (
          <>
            Koncept iz{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chinese_mythology"
              title="Chinese mythology"
            >
              kineske mitologije
            </a>{" "}
            smješten u osam kardinalnih smjerova, grupa od osam planina ili
            stubišta koja se smatraju nositeljima neba.
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Feather_Mountain"
            title="Feather Mountain"
          >
            Planina Perje
          </a>
        ),
        Description: (
          <>
            Jedna od mnogih važnih mitoloških planina u{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chinese_mythology"
              title="Chinese mythology"
            >
              kineskoj mitologiji
            </a>
            , posebno povezana s{" "}
            <a
              href="https://en.wikipedia.org/wiki/Great_Flood"
              title="Great Flood"
            >
              Velikim poplavama
            </a>
            .
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Fusang" title="Fusang">
            Fusang
          </a>
        ),
        Description: "Mistična zemlja na istoku prema kineskim legendama.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Jade_Mountain_(mythology)"
            title="Jade Mountain (mythology)"
          >
            Jadna planina
          </a>
        ),
        Description: (
          <>
            Mitološka planina u{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chinese_mythology"
              title="Chinese mythology"
            >
              kineskoj mitologiji
            </a>{" "}
            i prebivalište{" "}
            <a
              href="https://en.wikipedia.org/wiki/Xiwangmu"
              title="The Queen Mother of the West"
            >
              Kraljice majke zapada
            </a>
            .
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Kunlun_Mountain_(mythology)"
            title="Kunlun Mountain (mythology)"
          >
            Kunlun planina
          </a>
        ),
        Description:
          "Mjesto gdje su prema kineskoj mitologiji živjeli besmrtnici.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Longmen_(mythology)"
            title="Longmen (mythology)"
          >
            Duga planina
          </a>
        ),
        Description: "Legendaran slap u kineskoj mitologiji.",
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Mount_Buzhou"
            title="Mount Buzhou"
          >
            Planina Buzhou
          </a>
        ),
        Description: (
          <>
            Drevna{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chinese_mythology"
              title="Chinese mythology"
            >
              kineska mitološka
            </a>{" "}
            planina koja je prema starim tekstovima ležala sjeverozapadno od{" "}
            <a
              href="https://en.wikipedia.org/wiki/Kunlun_Mountains"
              title="Kunlun Mountains"
            >
              Kunlun planina
            </a>
            , na lokaciji danas poznatoj kao{" "}
            <a
              href="https://en.wikipedia.org/wiki/Pamir_Mountains"
              title="Pamir Mountains"
            >
              Pamir planine
            </a>
            .
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Mount_Penglai"
            title="Mount Penglai"
          >
            Planina Penglai
          </a>
        ),
        Description: (
          <>
            Legendarna planina u{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chinese_mythology"
              title="Chinese mythology"
            >
              kineskoj mitologiji
            </a>
            , navodno smještena na otoku u Bohai moru, dom taoističkih
            besmrtnika.
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Moving_Sands"
            title="Moving Sands"
          >
            Pokretni pijesak
          </a>
        ),
        Description: (
          <>
            Jedna od prepreka koju fiktivna verzija monaha{" "}
            <a href="https://en.wikipedia.org/wiki/Xuanzang" title="Xuanzang">
              Xuanzanga
            </a>{" "}
            i njegovi suputnici moraju prijeći na svojoj misiji da donesu
            budističke spise iz Indije i vrate ih u Tang Kinu.
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Red_River_(mythology)"
            title="Red River (mythology)"
          >
            Crvena rijeka
          </a>
        ),
        Description: (
          <>
            Jedna od mitoloških rijeka koje navodno teku s{" "}
            <a
              href="https://en.wikipedia.org/wiki/Kunlun_(mythology)"
              title="Kunlun (mythology)"
            >
              Kunluna
            </a>
            , mitološke zemlje s planinskim karakteristikama.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Shangri-La" title="Shangri-La">
            Shangri-La
          </a>
        ),
        Description: (
          <>
            Mistična, harmonična dolina zatvorena na zapadnom kraju{" "}
            <a
              href="https://en.wikipedia.org/wiki/Kunlun_Mountains"
              title="Kunlun Mountains"
            >
              Kunlun planina
            </a>
            , opisana u romanu iz 1933. godine{" "}
            <i>
              <a
                href="https://en.wikipedia.org/wiki/Lost_Horizon"
                title="Lost Horizon"
              >
                "Izgubljeni horizont"
              </a>
            </i>{" "}
            engleskog autora{" "}
            <a
              href="https://en.wikipedia.org/wiki/James_Hilton_(novelist)"
              title="James Hilton (novelist)"
            >
              Jamesa Hiltona
            </a>
            .
          </>
        ),
      },
      {
        Name: (
          <a
            href="https://en.wikipedia.org/wiki/Weak_River_(mythology)"
            title="Weak River (mythology)"
          >
            Slaba rijeka
          </a>
        ),
        Description: (
          <>
            Jedna od mitoloških rijeka koja teče blizu{" "}
            <a
              href="https://en.wikipedia.org/wiki/Kunlun_(mythology)"
              title="Kunlun (mythology)"
            >
              Kunluna
            </a>
            , dom zapadnog raja.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Shangdu" title="Shangdu">
            Xangdu
          </a>
        ),
        Description: (
          <>
            Ljetna prijestolnica{" "}
            <a
              href="https://en.wikipedia.org/wiki/Kublai_Khan"
              title="Kublai Khan"
            >
              Kublai Kana
            </a>
            's Yuan dinastije postala je mitološko mjesto i metafora za raskoš i
            raskoš, potaknuta popularnom pjesmom iz 1816.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Kubla_Khan"
              title="Kubla Khan"
            >
              "Kubla Kan"
            </a>{" "}
            Samuela Taylor Coleridgea.
          </>
        ),
      },
    ],
  };

  const abrahamskaMitologija = {
    name: "Abrahamovska mitologija",
    data: [
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Antillia" title="Antillia">
            Antillia
          </a>
        ),
        Description: (
          <>
            Otok iz stare Iberske legende postavljen tijekom muslimanske osvajanja Hispanije. Legenda kaže da su tijekom tog vremena sedam kršćanskih vizigotskih biskupa, koji su bježali pred muslimanskim osvajačima, ukrcali se sa svojim stadima na brodove i zaplovili prema zapadu u Atlantski ocean, vodeći ih do otoka (Antillia ili Otok Sedam Gradova) gdje su osnovali sedam naselja.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/As-Sir%C4%81t" title="As-Sirāt">
            As-Sirāt
          </a>
        ),
        Description: (
          <>
            Most koji svaki čovjek mora prijeći na Yawm al-Qiyamah ('Dan Uskrsnuća') kako bi ušao u Raj prema islamu.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Barzakh" title="Barzakh">
            Barzakh
          </a>
        ),
        Description: (
          <>
            Mjesto koje razdvaja žive od posliježivota ili faza/'stadij' između smrti pojedinca i njihovog uskrsnuća u 'Posliježivotu'.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Brig_of_Dread" title="Brig of Dread">
            Brig of Dread
          </a>
        ),
        Description: "Most do Čistilišta koji mrtva duša mora prijeći.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Garden_of_Eden" title="Garden of Eden">
            Garden of Eden
          </a>
        ),
        Description: (
          <>
            Raj gdje su prema abrahamovskim religijama prvi put stvoreni ljudi i gdje su boravili dok ih Bog nije izbacio zbog neposluha.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Heaven" title="Heaven">
            Heaven
          </a>
        ),
        Description: "U abrahamovskim religijama, raj gdje dobri ljudi koji su umrli nastavljaju postojati.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Hell" title="Hell">
            Hell
          </a>
        ),
        Description: (
          <>
            U nekim abrahamovskim religijama, područje u posliježivotu u kojem se zle duše kažnjavaju nakon smrti.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Hitfun" title="Hitfun">
            Hitfun
          </a>
        ),
        Description: (
          <>
            Velika razdvajajuća rijeka koja razdvaja Svijet Tame od Svijeta Svjetla u mandejskoj kozmologiji.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Iram_of_the_Pillars" title="Iram of the Pillars">
            Iram of the Pillars
          </a>
        ),
        Description: "Izgubljeni grad spomenut u Kuranu.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Jabulqa_and_Jabulsa" title="Jabulqa and Jabulsa">
            Jabulqa and Jabulsa
          </a>
        ),
        Description: "Dva grada spomenuta u šiitskim hadisima.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Kingdom_of_Prester_John" title="Kingdom of Prester John">
            Kingdom of Prester John
          </a>
        ),
        Description: (
          <>
            Legendarno moćna kršćanska nacija izvan muslimanskog svijeta u srednjovjekovnoj romantičnoj književnosti, prvo smještena u Južnoj Aziji, zatim Središnjoj Aziji, zatim Istočnoj Africi.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Kolob" title="Kolob">
            Kolob
          </a>
        ),
        Description: (
          <>
            Astronomsko tijelo (zvijezda ili planet) navodno blizu prijestolja Boga u mormonskoj kozmologiji.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Malakut" title="Malakut">
            Malakut
          </a>
        ),
        Description: "Predloženi nevidljivi svijet, prisutan u islamskoj kozmologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Matarta" title="Matarta">
            Matarta
          </a>
        ),
        Description: (
          <>
            „Stanica“ ili „toll kuća“ koja se nalazi između Svijeta Svjetla (alma ḏ-nhūra) i Tibila (Zemlje) u mandejskoj kozmologiji.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Mount_of_the_Temptation" title="Mount of the Temptation">
            Mount of the Temptation
          </a>
        ),
        Description: (
          <>
            Legendarno mjesto Isusove kušnje, tradicionalno smješteno na Jebel Quruntul ili 'Ushsh el-Ghurab blizu Jerihona na Zapadnoj obali.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Nbu" title="Nbu">
            Nbu
          </a>
        ),
        Description: "Mandejsko ime za planet Merkur.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Pand%C3%A6monium_(Paradise_Lost)" title="Pandæmonium (Paradise Lost)">
            Pandæmonium
          </a>
        ),
        Description: (
          <>
            Glavni grad Pakla u John Miltonovom Izgubljenom raju.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Piriawis" title="Piriawis">
            Piriawis
          </a>
        ),
        Description: (
          <>
            Sveti životvorni rijeka (yardna) Svijeta Svjetla u mandejskoj kozmologiji.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Pleroma#Gnosticism" title="Pleroma">
            Pleroma
          </a>
        ),
        Description: "Sjedište svetih eona u gnosticizmu.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Scholomance" title="Scholomance">
            Scholomance
          </a>
        ),
        Description: (
          <>
            Legendarna škola crne magije koju vodi sam vrag, smještena u Hermannstadtu (danas: Sibiu, Rumunjska). Smještena u planinama, južno od grada Sibija, blizu neimenovanog jezera.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Siniawis" title="Siniawis">
            Siniawis
          </a>
        ),
        Description: "Regija u Svijetu Tame ili podzemlju.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Tripura" title="Tripura">
            Tripura
          </a>
        ),
        Description: (
          <>
            Tri grada ili tvrđave, opisana u hinduističkoj povijesti kao izgrađena od strane velikog asurskog arhitekta Mayasure.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Yardna" title="Yardna">
            Yardna
          </a>
        ),
        Description: (
          <>
            Tijelo slatke tekuće vode pogodno za ritualnu upotrebu kao krstionica u mandejizmu.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Zarahemla" title="Zarahemla">
            Zarahemla
          </a>
        ),
        Description: (
          <>
            Civilizacija koja je izgrađena u drevnoj Americi, prema mormonskom vjerovanju.
          </>
        ),
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Zerzura" title="Zerzura">
            Zerzura
          </a>
        ),
        Description: "Saharski grad poznat kao 'oaza malih ptica', navodno pun blaga.",
      },
    ],
  };
  
  const keltskeMitologije = {
    name: "Keltske mitologije",
    data: [
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Annwn" title="Annwn">
            Annwn
          </a>
        ),
        Description: "„Drugi svijet“ u velškoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Avalon" title="Avalon">
            Avalon
          </a>
        ),
        Description:
          "Legendarni Otok Jabuka, vjeruje se da je konačno počivalište kralja Arthura.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Camelot" title="Camelot">
            Camelot
          </a>
        ),
        Description: "Grad u kojem je kralj Arthur vladao.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Cantre%27r_Gwaelod" title="Cantre'r Gwaelod">
            Cantre'r Gwaelod
          </a>
        ),
        Description:
          "Legendarno drevno potopljeno kraljevstvo koje je navodno zauzimalo plodno područje između otoka Ramsey i otoka Bardsey.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Celliwig" title="Celliwig">
            Celliwig
          </a>
        ),
        Description: "Najstarije nazvano mjesto za dvor kralja Arthura.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Brasil_(mythical_island)" title="Brasil (mythical island)">
            Brasil ili Hy-Brasil
          </a>
        ),
        Description: "Mitski otok zapadno od Irske.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Dinas_Affaraon" title="Dinas Affaraon">
            Dinas Affaraon/Ffaraon
          </a>
        ),
        Description:
          "Legendarni dom podružnice Druida nazvane Pheryllt, koji su radili kao metalurzi i alkemičari. Poznat i kao „Grad Viših Moći“ ili „Ambrozinski Grad“, njegova navodna lokacija je Snowdonia i navodno je izvorno ime mjesta Dinas Emrys.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Emain_Ablach" title="Emain Ablach">
            Emain Ablach
          </a>
        ),
        Description: "Mitski otok raja u irskoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Fintan%27s_Grave" title="Fintan's Grave">
            Fintanova Grobnica
          </a>
        ),
        Description: "Mitska pećina na irskom brdu Tul Tuinde.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Four_Treasures_of_the_Tuatha_D%C3%A9_Danann" title="Four Treasures of the Tuatha Dé Danann">
            Četiri Blaga Tuatha Dé Danann (Gorias, Finias, Murias i Falias)
          </a>
        ),
        Description:
          "U irskoj mitologiji, Tuatha Dé Danann dobivaju svoja četiri čarobna blaga iz četiri legendarna grada: Gorias na istoku; Finias na jugu; Murias na zapadu; i Falias na sjeveru.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Lyonesse" title="Lyonesse">
            Lyonesse
          </a>
        ),
        Description:
          "Zemlja u Arturovoj legendi, koja se navodno graniči s Cornwallom u Engleskoj.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Mag_Mell" title="Mag Mell">
            Mag Mell
          </a>
        ),
        Description:
          "Mitska podzemna ravnica u irskoj mitologiji, dostižna samo kroz smrt ili slavu.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Rocabarraigh" title="Rocabarraigh">
            Rocabarraigh
          </a>
        ),
        Description: "Fantomska otok u škotskoj galskoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Tech_Duinn" title="Tech Duinn">
            Tech Duinn
          </a>
        ),
        Description: "Mitski otok zapadno od Irske gdje duše idu nakon smrti.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/T%C3%ADr_fo_Thuinn" title="Tír fo Thuinn">
            Tír fo Thuinn
          </a>
        ),
        Description:
          "Keltski Drugi svijet u irskoj mitologiji, kraljevstvo pod morem.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/T%C3%ADr_na_n%C3%93g" title="Tír na nÓg">
            Tír na nÓg
          </a>
        ),
        Description: "Keltski Drugi svijet u irskoj mitologiji.",
      },
      {
        Name: (
          <a href="https://en.wikipedia.org/wiki/Ys" title="Ys">
            Ys
          </a>
        ),
        Description:
          "Grad smješten u Bretanji, Francuska, navodno izgrađen ispod razine mora i srušen kad je Đavao uništio branu koja ga je štitila.",
      },
    ],
  };
  
  const ostaleMitologije = {
    name: "Ostale mitologije",
    data: [
      {
        Name: "Abya Yala",
        Description: "„Spašena zemlja“, naziv koji koriste Guna narod.",
      },
      {
        Name: "Adiri",
        Description: "Život poslije smrti u Kiwai mitologiji.",
      },
      {
        Name: "Adlivun, Adliparmiut i Qudlivun",
        Description:
          "Posmrtni svjetovi u centralnoj Inuitskoj mitologiji. Adlivun i Adliparmiut opisani su kao zemlje bijede, dok je Qudlivun zemlja sreće.",
      },
      {
        Name: "Akilineq",
        Description:
          "Legendarna lokacija u Inuitskoj mitologiji, vjeruje se da je potpuno mitska ili možda Labrador, Baffinov otok ili čak Island.",
      },
      {
        Name: "Alatyr",
        Description:
          "Sveti kamen, „otac svim kamenima“, pupak zemlje, sadrži svete slova i ima ljekovita svojstva u istočnoslavenskim legendama.",
      },
      {
        Name: "Alomkik",
        Description:
          "Mjesto dostupno zaštitniku mitologije Abenaki naroda, Pamola, gdje drži one koji prekrše na planini Katahdin u Maineu.",
      },
      {
        Name: "al-Wakwak",
        Description: "Otok na kojem rastu mala djeca u obliku drveća.",
      },
      {
        Name: "Axis mundi",
        Description:
          "Centar svijeta ili veza između Neba i Zemlje u raznim religijama i mitologijama.",
      },
      {
        Name: "Aztlán",
        Description:
          "Legendarna izvorna domovina Mexica naroda u Mexica/Aztec mitologiji.",
      },
      {
        Name: "Bald Mountain",
        Description:
          "Lokacija u slavenskoj folklori povezana s vještičarstvom.",
      },
      {
        Name: "Baltia",
        Description: "Otok od jantara negdje u sjevernoj Europi.",
      },
      {
        Name: "Biringan city",
        Description:
          "Mitski grad koji navodno nevidljivo leži između Gandare, Tarangnana i Pagsanghana u provinciji Samar na Filipinima. Biringan znači „crni grad“ ili grad Nepoznatih na Warayu.",
      },
      {
        Name: "Brittia",
        Description: "Mitski otok uz obalu Austrazije.",
      },
      {
        Name: "Buyan",
        Description:
          "Misteriozni otok koji može iskočiti i nestati uz pomoć plime u ruskoj mitologiji.",
      },
      {
        Name: "Chinvat Bridge",
        Description:
          "Most za probir, koji razdvaja svijet živih od svijeta mrtvih u zoroastrizmu.",
      },
      {
        Name: "City of the Caesars",
        Description:
          "Grad između planine od zlata i druge od dijamanata, navodno smješten u Patagoniji.",
      },
      {
        Name: "Cockaigne",
        Description:
          "U srednjovjekovnoj mitologiji, zemlja izobilja gdje ne postoji potreba.",
      },
      {
        Name: "Domdaniel",
        Description:
          "Velika dvorana na dnu oceana gdje se susreću zli čarobnjaci, duhovi i gnomi.",
      },
      {
        Name: "El Dorado",
        Description: "Navodni grad od zlata u Južnoj Americi.",
      },
      {
        Name: "Fountain of Youth",
        Description:
          "Mjesto, detaljno u mnogim legendama širom svijeta, gdje se možete napiti ili okupati u njegovim vodama da biste povratili mladost.",
      },
      {
        Name: "Fiddler's Green",
        Description:
          "U engleskom pomorskom folkloru 19. stoljeća, bio je svojevrsni život poslije smrti za mornare koji su služili barem pedeset godina na moru.",
      },
      {
        Name: "Hara Berezaiti",
        Description:
          "Legendaran planinski vrh oko kojeg se okreću zvijezde i planete prema drevnim zoroastrijskim spisima iz Aveste.",
      },
      {
        Name: "Hawaiki",
        Description: "Rodni otok Polinezijaca, posebno Māora.",
      },
      {
        Name: "Hubur",
        Description:
          "Sumerski izraz koji znači „rijeka“, „vodeni tok“ ili „donji svijet“.",
      },
      {
        Name: "Irkalla",
        Description:
          "Podzemlje iz kojeg nema povratka u babilonskoj mitologiji.",
      },
      {
        Name: "Kalunga line",
        Description:
          "Vodena granica između svijeta živih i mrtvih u religijskim tradicijama kongoanskog područja.",
      },
      {
        Name: "Karshvar",
        Description: "Legendarne kontinente prema Avesti.",
      },
      {
        Name: "Kingdom of Opona",
        Description: "Mitsko kraljevstvo u ruskom folkloru.",
      },
      {
        Name: "Kingdom of Reynes",
        Description: "Zemlja spomenuta u srednjovjekovnom romanu King Horn.",
      },
      {
        Name: "Kingdom of Saguenay",
        Description:
          "Prema Francuzima, irokoanska priča o kraljevstvu plavih muškaraca bogatih zlatom i krznom koje je postojalo na sjeveru Kanade prije francuske kolonizacije.",
      },
      {
        Name: "Kitezh",
        Description: "Legendaran grad ispod voda jezera Svetloyar.",
      },
      {
        Name: "Kyöpelinvuori",
        Description: "U finskoj mitologiji, mjesto koje mrtve žene progoni.",
      },
      {
        Name: "La Canela",
        Description:
          "Također poznat kao Dolina Cimeta, legendarna lokacija u Južnoj Americi.",
      },
      {
        Name: "La Ciudad Blanca",
        Description: "„Bijeli grad“, legendarni grad u Hondurasu.",
      },
      {
        Name: "Lake Parime",
        Description:
          "Ogromno jezero u sjeveroistočnoj Južnoj Americi, navodno mjesto El Dorada.",
      },
      {
        Name: "Land of Darkness",
        Description: "Mitska zemlja navodno uvijena u vječnu tamu.",
      },
      {
        Name: "Lemuria",
        Description:
          "Hipotetska „izgubljena zemlja“ različito locirana u Indijskom i Tihom oceanu.",
      },
      {
        Name: "Lintukoto",
        Description:
          "U finskoj mitologiji, rajski krajolik gdje ptice migriraju svake zime; jer je bio blizu ruba neba, nebo je bilo vrlo blizu zemlje i stoga su njegovi stanovnici bili patuljci.",
      },
      {
        Name: "Lost City of Z",
        Description:
          "Autohtoni grad kojeg je kolonel Percy Harrison Fawcett vjerovao da je postojao u džungli brazilske države Mato Grosso.",
      },
      {
        Name: "Lukomorye",
        Description: "Drevna regija u ruskim zemljama.",
      },
      {
        Name: "Mahoroba",
        Description: "Daleka zemlja puna blaženstva i mira, slično Arkadiji.",
      },
      {
        Name: "Mictlan",
        Description: "Podzemni svijet Mexica.",
      },
      {
        Name: "Mu",
        Description:
          "Hipotetski kontinent koji je navodno nestao na početku ljudske povijesti.",
      },
      {
        Name: "Nibiru",
        Description: "Mitska planeta opisana u babilonskim spisima.",
      },
      {
        Name: "Paititi",
        Description:
          "Legendarni Inka izgubljeni grad ili utopijska bogata zemlja koja navodno leži istočno od Anda.",
      },
      {
        Name: "Pohjola",
        Description:
          "Carstvo Louhija u finskoj mitologiji, doslovno prevedeno njegovo ime znači „Sjever“.",
      },
      {
        Name: "Quivira i Cíbola",
        Description:
          "Dva od sedam legendarnih Gradova Zlata koje su pretpostavljali španjolski osvajači da su postojali u Americi.",
      },
      {
        Name: "Ryūgū-jō",
        Description: "Podmorska palača Ryūjina, zmaja kami mora.",
      },
      {
        Name: "Section 37",
        Description:
          "Legendarni kamp Paula Bunyana. Toliko velik da je trebalo pola dana da se oko njega prođe, a kuhinja sama po sebi bila je dugacka dvije milje (3,2 km) s devet kuhara i sedamdeset pet poslužitelja u njegovim ranim danima.",
      },
      {
        Name: "Sierra de la Plata",
        Description:
          "(Spanjolski: Srebrne planine), bila je legendarna riznica srebra za koju se vjerovalo da se nalazi u Južnoj Americi.",
      },
      {
        Name: "Silat Bridge",
        Description:
          "Silat most je most u Lalishu, Irak, koji vodi do najsvetijeg Yazidi svetišta u Yazidizmu.",
      },
      {
        Name: "Suddene",
        Description: "Zemlja pronađena u srednjovjekovnom romanu King Horn.",
      },
      {
        Name: "Summerland",
        Description:
          "Naziv koji su dali Teozofi, Wiccani i neki suvremeni pogansti religije svom konceptualizaciji (većinom pastoralnog) zagrobnog života.",
      },
      {
        Name: "Takama-ga-hara",
        Description: "Mjesto boravka Shinto kami.",
      },
      {
        Name: "Thule",
        Description:
          "Otok negdje u pojasu Skandinavije, sjeverne Velike Britanije, Islanda i Grenlanda.",
      },
      {
        Name: "Vineta",
        Description: "Mitski grad na južnoj obali Baltičkog mora.",
      },
      {
        Name: "Vyraj",
        Description:
          "Mitsko mjesto u slavenskoj mitologiji, gdje „ptice lete za zimu, a duše idu nakon smrti“.",
      },
      {
        Name: "Westernesse",
        Description: "Zemlja pronađena u srednjovjekovnom romanu King Horn.",
      },
      {
        Name: "Xibalba",
        Description: "Podzemni svijet u mitskom mitologiji.",
      },
      {
        Name: "Yomi",
        Description:
          "Zemlja mrtvih prema Shinto mitologiji, kako je opisano u Kojikiju.",
      },
      {
        Name: "Yomotsu Hirasaka",
        Description:
          "Nagib ili granica između ovog svijeta, gdje žive živi, i drugog svijeta, gdje žive mrtvi (Yomi).",
      },
    ],
  };

  return (
    <div className="tablica">
      <Navbar />
      <div className="divLista">
        <h1>Popis mitoloških mjesta</h1>
      </div>
      <div className="divLista">
        <h2>{egipatskaMitologija.name}</h2>
        <TablicaMjesta data={egipatskaMitologija.data} />
      </div>
      <div className="divLista">
        <h2>{grčkaMitologija.name}</h2>
        <TablicaMjesta data={grčkaMitologija.data} />
      </div>
      <div className="divLista">
        <h2>{nordiskaMitologija.name}</h2>
        <TablicaMjesta data={nordiskaMitologija.data} />
      </div>
      <div className="divLista">
        <h2>{indijskaMitologija.name}</h2>
        <TablicaMjesta data={indijskaMitologija.data} />
      </div>
      <div className="divLista">
        <h2>{istočnoAzijskaMitologija.name}</h2>
        <TablicaMjesta data={istočnoAzijskaMitologija.data} />
      </div>
      <div className="divLista">
        <h2>{abrahamskaMitologija.name}</h2>
        <TablicaMjesta data={abrahamskaMitologija.data} />
      </div>
      <div className="divLista">
        <h2>{keltskeMitologije.name}</h2>
        <TablicaMjesta data={keltskeMitologije.data} />
      </div>
      <div className="divLista">
        <h2>{ostaleMitologije.name}</h2>
        <TablicaMjesta data={ostaleMitologije.data} />
      </div>
      <div id="kontakt">
        <Footer/>
      </div>
    </div>
  );
}

export default ListaMjesta;

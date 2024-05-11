// import { ertekesitok } from "./ertekesitok.js";
// import { cars} from "./autok";

//aktuális idő megjelenítése
const dateTimeElement = document.getElementById("datetime");
const expiryDate = document.querySelector("td:nth-child(3)");

function updateDateTime() {
  const now = new Date();
  dateTimeElement.textContent = now.toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  now.setDate(now.getDate() + 7);
  expiryDate.textContent = now.toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

setInterval(updateDateTime, 1000);
updateDateTime();

const ertekesitok = {
  "Argyelán Zoltán": {"email": "zoltan.argyelan@porschebuda.hu", "telefon": "+36 1 3828688"},
  "Enisz Réka": {"email": "reka.enisz@porschebuda.hu", "telefon": "+36 1 3828630"},
  "Harangi János": {"email": "janos.harangi@porschebuda.hu", "telefon": "+36 1 3828629"},
  "Varga Róbert": {"email": "robert.varga@porschebuda.hu", "telefon": "+36 1 3828626"},
  "Krupa Balázs": {"email": "balazs.krupa@porschebuda.hu", "telefon": "+36 1 3828611"},
  "Sándor Kristóf": {"email": "kristof.sandor@porschebuda.hu", "telefon": "+36 1 3828635"},
  "Szilágyi Réka": {"email": "reka.szilagyi@porschebuda.hu", "telefon": "+36 1 3828628"},
  "Rafael Károly": {"email": "karoly.rafael@porschebuda.hu", "telefon": "+36 1 3828624"},
  "Karancsy László": {"email": "laszlo.karancsy@porschebuda.hu", "telefon": "+36 1 3828651"},
  "Takács Szilvia": {"email": "szilvia.takacs@porschebuda.hu", "telefon": "+36 1 3828621"},
  "Angyal Máté": {"email": "mate.angyal@porschebuda.hu", "telefon": "+36 1 3828684"},
  "Kramm Dávid": {"email": "david.kramm@porschebuda.hu", "telefon": "+36 1 3828681"},
  "Horváth Gábor": {"email": "gabor.horvath@porschebuda.hu", "telefon": "+36 1 3828616"},
  "Pfiszter András": {"email": "andras.pfiszter@porschebuda.hu", "telefon": "+36 1 3828633"},
  "Vig Dávid": {"email": "david.vig@porschebuda.hu", "telefon": "+36 1 3828693"},
  "Bodor István": {"email": "istvan.bodor@porschebuda.hu", "telefon": "+36 1 3828663"},
  "Tóth-Árvai István": {"email": "istvan.toth-arvai@porschebuda.hu", "telefon": "+36 1 3828662"},
  "Kardos Tamás": {"email": "tamas.kardos@porschebuda.hu", "telefon": "+36 1 3828699"},
  "Izinger János": {"email": "janos.izinger@porschebuda.hu", "telefon": "+36 1 3828661"},
  "Molnár Zoltán": {"email": "zoltan.molnar@porschebuda.hu", "telefon": "+36 1 3828696"}
};

//értékesítők adatainak megjelenítése
const ertekesitoSelect = document.getElementById("ertekesito");
const emailElement = document.getElementById("email");
const telefonElement = document.getElementById("telefonszam");
const thanksTelefonszam = document.getElementById("thanksTelefonszam");
const thankYouElement = document.getElementById("thanksName");

for (const nev in ertekesitok) {
  const option = document.createElement("option");
  option.value = nev;
  option.textContent = nev;
  ertekesitoSelect.appendChild(option);
}

ertekesitoSelect.addEventListener("change", function () {
  const selectedName = ertekesitoSelect.value;
  const selectedErtek = ertekesitok[selectedName];
  emailElement.textContent = selectedErtek.email;
  telefonElement.textContent = selectedErtek.telefon;
  thankYouElement.textContent = selectedName;
  thanksTelefonszam.textContent = selectedErtek.telefon;
});


const cars = {
  "Arteon": {"link": "./img/Arteon.png"},
  "Amarok": {"link": "./img/Amarok.png"},
  "Caddy": {"link": "./img/Caddy.png"},
  "Crafter": {"link": "./img/Crafter.png"},
  "Golf Limuzin": {"link": "./img/golf limuzin.png"},
  "Golf Variant": {"link": "./img/Golf Variant.png"},
  "Id_Buzz": {"link": "./img/id_buzz.png"},
  "ID3": {"link": "./img/id3.png"},
  "ID4": {"link": "./img/id4.png"},
  "ID5": {"link": "./img/id5.png"},
  "ID7": {"link": "./img/id7.png"},
  "Passat": {"link": "./img/passat.png"},
  "T-Cross": {"link": "./img/t-cross.png"},
  "T-Roc": {"link": "./img/t-roc.png"},
  "Taigo": {"link": "./img/taigo.png"},
  "Tiguan Allspace": {"link": "./img/tiguan allspace.png"},
  "Tiguan": {"link": "./img/tiguan.png"},
  "Touareg": {"link": "./img/touareg.png"},
  "Touran": {"link": "./img/touran.png"},
  "Touran2": {"link": "./img/Touran.png"}
};

//autók megjelenítése
function initCarDropdown() {
  const carSelect = document.getElementById("auto");
  carSelect.innerHTML = ""; // clear the select

  for (const car in cars) {
    const option = document.createElement("option");
    option.value = car;
    option.textContent = car;
    carSelect.appendChild(option);
  }
  carSelect.value = "Arteon";
  updateAutoImage("Arteon");
}

function updateAutoImage(selectedCar) {
  const carImage = document.getElementById("autokep");
  carImage.src = cars[selectedCar].link;
}

function updateAuto() {
  const autoKepElem = document.getElementById("auto").value;
  updateAutoImage(autoKepElem);
}

document.addEventListener("DOMContentLoaded", function () {
  initCarDropdown();
  ertekesitoSelect.dispatchEvent(new Event("change"));
});

function updateOsszes() {
  const bruttoArElem = document.getElementById("brutto_ar");
  const dbElem = document.getElementById("db");
  const osszesElem = document.getElementById("osszesenBrutto");

  let bruttoAr = parseInt(bruttoArElem.value);
  let db = parseInt(dbElem.value);

  if (isNaN(bruttoAr) || bruttoAr <= 0){
    bruttoAr = 0;
    bruttoArElem.classList.add("error");
  } else {
    bruttoArElem.classList.remove("error");
  }

  if (isNaN(db) || db <= 0){
    db = 0;
    dbElem.classList.add("error");
  } else {
    dbElem.classList.remove("error");
  }
  const osszes = bruttoAr * db;
  osszesElem.textContent = osszes.toLocaleString("hu-HU") + " Ft";

  frissitOsszesen();
}
document.getElementById("brutto_ar").addEventListener('change', updateOsszes);
document.getElementById("db").addEventListener('change', updateOsszes);

document.getElementById("brutto_ar").addEventListener('input', updateOsszes);
document.getElementById("db").addEventListener('input', updateOsszes);

updateOsszes();
frissitOsszesen();

function updatOsszesen2() {
  const bruttoArElem = document.getElementById("brutto_ar2");
  const dbElem = document.getElementById("db2");
  const osszesElem = document.getElementById("osszesenBrutto2");

  let bruttoAr2 = parseInt(bruttoArElem.value);
  let db2 = parseInt(dbElem.value);

  if (isNaN(bruttoAr2) || bruttoAr2 <= 0){
    bruttoAr2 = 0;
    bruttoArElem.classList.add("error");
  } else {
    bruttoArElem.classList.remove("error");
  }

  if (isNaN(db2) || db2 <= 0){
    db = 0;
    dbElem.classList.add("error");
  } else {
    dbElem.classList.remove("error");
  }
  const osszes2 = bruttoAr2 * db;
  osszesElem.textContent = osszes2.toLocaleString("hu-HU") + " Ft";

  frissitOsszesen();
}
document.getElementById("brutto_ar2").addEventListener('change', updatOsszesen2);
document.getElementById("db2").addEventListener('change', updatOsszesen2);

document.getElementById("brutto_ar2").addEventListener('input', updatOsszesen2);
document.getElementById("db2").addEventListener('input', updatOsszesen2);

updatOsszesen2();
frissitOsszesen();

//3. bruttó * db = összesen

function updateOsszes3() {
  const bruttoArElem = document.getElementById("brutto_ar3");
  const dbElem = document.getElementById("db3");
  const osszesElem = document.getElementById("osszesenBrutto3");

  let bruttoAr3 = parseInt(bruttoArElem.value);
  let db3 = parseInt(dbElem.value);

  if (isNaN(bruttoAr3) || bruttoAr3 <= 0){
    bruttoAr3 = 0;
    bruttoArElem.classList.add("error");
  } else {
    bruttoArElem.classList.remove("error");
  }

  if (isNaN(db3) || db3 <= 0){
    db3 = 0;
    dbElem.classList.add("error");
  } else {
    dbElem.classList.remove("error");
  }
  const osszes3 = bruttoAr3 * db3;
  osszesElem.textContent = osszes3.toLocaleString("hu-HU") + " Ft";

  updateOsszes3();
  frissitOsszesen();
}

document.getElementById("brutto_ar3").addEventListener('change', updateOsszes3);
document.getElementById("db3").addEventListener('change', updateOsszes3);

document.getElementById("brutto_ar3").addEventListener('input', updateOsszes3);
document.getElementById("db3").addEventListener('input', updateOsszes3);

updateOsszes3();
frissitOsszesen();

const szolgaltatasok = {
  "nem igényel szerelést": {"ar": 0, "netto": 0},
  "kerékszerelés 16'-ig /4 db": {"ar": "8 890", "netto": "7 000"},
  "kerékszerelés 17-19'-ig /4 db": {"ar": "10 415", "netto": "8 200"},
  "kerékszerelés 20'- /4 db": {"ar": "12 955", "netto": "10 200"},
  "gumiszerelés 16'-ig Ft/4 db": {"ar": "15 875", "netto": "12 500"},
  "gumiszerelés 17-19'-ig Ft/4 db": {"ar": "19 050", "netto": "15 000"},
  "gumiszerelés 20'-ig Ft/4 db": {"ar": "25 275", "netto": "19 902"},
  "vonóhorog szerelés": { ar: "130 000", netto: "102 362" },
  "kamera szerelés": { ar: "150 000", netto: "118 110" },
  "első vagy hátsó sárfogó szerelés": { ar: "15 000", netto: "11 811" },
  "első és hátsó sárfogó szerelés": { ar: "30 000", netto: "23 622" },
  "légterelő szerelés": { ar: "8 000", netto: "6 300" },
  "felépítmény szerelés": { ar: "100 000", netto: "78 740" },
  "váltózár szerelés": { ar: "45 000", netto: "35 433" },
  "riasztó szerelés": { ar: "35 000", netto: "27 560" },
  "lökhárító fólia szerelés": {ar: "15 000", netto: "11 811" },
  "VW/Skoda appconnect szerelés": { ar: "25 000", netto: "19 685" },
  "Audi Smartphone szerelés": { ar: "150 000", netto: "118 110" },
  "tükörmonitor + kamera szerelés": { ar: "84 000", netto: "66 000" },
  "külön tájékoztató alapján": { ar: "" }
};

let bruttoNettoAllapot = true;  // true: bruttó, false: netto

document.addEventListener('DOMContentLoaded', function () {
  initSzolgaltatasDropDown();
  updateMunkadij();

  document.querySelector('x45').addEventListener('click', function () {
    bruttoNettoAllapot = !bruttoNettoAllapot;
    updateMunkadij();   //frissítjuk a munkadijat az új állapot alapján
    //a cellák szövegének frissítése az új állapotnak megfelelően
    this.textContent = bruttoNettoAllapot ? "Bruttó ár" : "Nettó ár";
    document.querySelector('x31').textContent = bruttoNettoAllapot ? "Összesen bruttó" : "Összesen nettó";
  });
});

function initSzolgaltatasDropdown() {
  const szolgaltatasSelectElem = document.getElementById("kerekszereles");
  szolgaltatasSelectElem.innerHTML = "";   //meglévő opciók eltávolítása

  Object.keys(szolgaltatasok).forEach(szolgaltatasNev => {
    const option = document.createElement("option");
    option.value = szolgaltatasNev;
    option.textContent = szolgaltatasNev;
    szolgaltatasSelectElem.appendChild(option);
  });
}

function updateMunkadij(){
  const valasztottSzolgaltatas = document.getElementById("kerekszereles").value;
  const munkadijElem = document.getElementById("munkadij");
  const kivalasztottSzolgaltatasAdatok = szolgaltatasok[valasztottSzolgaltatas];

  if (valasztottSzolgaltatas === ""){
    munkadijElem.textContent = "0 Ft";
  }
  const munkadij = bruttoNettoAllapot ? kivalasztottSzolgaltatasAdatok.ar : kivalasztottSzolgaltatasAdatok.netto;
  munkadijElem.textContent = `${munkadij} Ft`;
}

document.addEventListener('DOMContentLoaded', function () {
  const oneVar = document.getElementById('oneVar');
  const secVar = document.getElementById('secVar');
  const thirdVar = document.getElementById('thirdVar');

  const osszesen1 = document.getElementById('osszesen_1');
  const osszesen2 = document.getElementById('osszesen_2');
  const osszesen3 = document.getElementById('osszesen_3');

  let isConstentVisible = true //a tartalom látható kezdetben

  oneVar.addEventListener('click', function () {
    isConstentVisible = !isConstentVisible;
    if (!isConstentVisible){
      oneVar.textContent = "";
      secVar.textContent = "";
      thirdVar.textContent = "";
      frissitOsszesen();
      osszesen2.textContent = "";
      osszesen3.textContent = "";
    } else {
      //tartalom megjelenítése
      oneVar.textContent = "1. változat";
      secVar.textContent = "2. változat";
      thirdVar.textContent = "3. változat";
      frissitOsszesen2();
    }
  });
});

function konvertSzamma(text) {
  const  clearText = text.replace(" Ft", "").replace(/\s+/g, ''); //Eltávolítjuk a Ft-ot és az összes szóközt
  const numb = parseFloat(clearText);  //konv. tisztított szöveg számmá
  return !isNaN(numb) ? numb : 0;
}

function frissitOsszesen() {
  const munkadijElem = document.getElementById('munkadij');
  const osszesenBruttoElem = document.getElementById('osszesenBrutto');
  const osszesenBruttoElem2 = document.getElementById('osszesenBrutto2');
  const osszesenBruttoElem3 = document.getElementById('osszesenBrutto3');
  const osszesen3Elem = document.getElementById('osszesen_1');

  const munkadij = konvertSzamma(munkadijElem.textContent);
  const osszesenBrutto = konvertSzamma(osszesenBruttoElem.textContent);
  const osszesenBrutto2 = konvertSzamma(osszesenBruttoElem2.textContent);
  const osszesenBrutto3 = konvertSzamma(osszesenBruttoElem3.textContent);

  let osszesen = munkadij + osszesenBrutto + osszesenBrutto2 + osszesenBrutto3;

  osszesen3Elem.textContent = osszesen.toLocaleDateString("hu-HU") + " Ft";
}
document.addEventListener('DOMContentLoaded', frissitOsszesen);

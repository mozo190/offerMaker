// import { ertekesitok } from "./ertekesitok.js";
// import { cars} from "./autok";

//aktuális idő megjelenítése
const dateTimeElement = document.getElementById("datetime");
const expiryDate = document.querySelector("td:nth-child(3)");
dateTimeElement.textContent = "";

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
ertekesitoSelect.dispatchEvent(new Event("change"));

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
});
document.getElementById("auto").addEventListener("change", updateAuto);

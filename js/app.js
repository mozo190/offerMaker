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

  if (isNaN(bruttoAr) || bruttoAr <= 0) {
    bruttoAr = 0;
    bruttoArElem.classList.add("hiba");
  } else {
    bruttoArElem.classList.remove("hiba");
  }

  if (isNaN(db) || db <= 0) {
    db = 0;
    dbElem.classList.add("hiba");
  } else {
    dbElem.classList.remove("hiba");
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

function updateOsszes2() {
  const bruttoArElem = document.getElementById("brutto_ar2");
  const dbElem = document.getElementById("db2");
  const osszesenBruttoElem = document.getElementById("osszesenBrutto2");

  let bruttoAr2 = parseInt(bruttoArElem.value);
  let db2 = parseInt(dbElem.value);

  if (isNaN(bruttoAr2) || bruttoAr2 <= 0) {
    bruttoAr2 = 0;
    bruttoArElem.classList.add("hiba");
  } else {
    bruttoArElem.classList.remove("hiba");
  }
  if (isNaN(db2) || db2 <= 0) {
    db2 = 0;
    dbElem.classList.add("hiba");
  } else {
    dbElem.classList.remove("hiba");
  }
  const osszesenBrutto2 = bruttoAr2 * db2;

  osszesenBruttoElem.textContent = osszesenBrutto2.toLocaleString("hu-Hu") + " Ft";
  frissitOsszesen();
}
document.getElementById('brutto_ar2').addEventListener('change', updateOsszes2);
document.getElementById('db2').addEventListener('change', updateOsszes2);

document.getElementById('brutto_ar2').addEventListener('input', updateOsszes2);
document.getElementById('db2').addEventListener('input', updateOsszes2);

updateOsszes2();
frissitOsszesen();

//3. bruttó * db = összesen

function updateOsszes3() {
  const bruttoArElem = document.getElementById("brutto_ar3");
  const dbElem = document.getElementById("db3");
  const osszesElem = document.getElementById("osszesenBrutto3");

  let bruttoAr3 = parseInt(bruttoArElem.value);
  let db3 = parseInt(dbElem.value);

  if (isNaN(bruttoAr3) || bruttoAr3 <= 0) {
    bruttoAr3 = 0;
    bruttoArElem.classList.add("hiba");
  } else {
    bruttoArElem.classList.remove("hiba");
  }

  if (isNaN(db3) || db3 <= 0) {
    db3 = 0;
    dbElem.classList.add("hiba");
  } else {
    dbElem.classList.remove("hiba");
  }
  const osszes3 = bruttoAr3 * db3;
  osszesElem.textContent = osszes3.toLocaleString("hu-HU") + " Ft";


  frissitOsszesen();
}

document.getElementById("brutto_ar3").addEventListener('change', updateOsszes3);
document.getElementById("db3").addEventListener('change', updateOsszes3);

document.getElementById("brutto_ar3").addEventListener('input', updateOsszes3);
document.getElementById("db3").addEventListener('input', updateOsszes3);


updateOsszes3();
frissitOsszesen();

const szolgaltatasok = {
  "nem igényel szerelést": { ar: 0, netto: 0},
  "kerékszerelés 16'-ig /4 db": {ar: "8 890", netto: "7 000"},
  "kerékszerelés 17-19'-ig /4 db": {ar: "10 415", netto: "8 200"},
  "kerékszerelés 20'- /4 db": {ar: "12 955", netto: "10 200"},
  "gumiszerelés 16'-ig Ft/4 db": {ar: "15 875", netto: "12 500"},
  "gumiszerelés 17-19'-ig Ft/4 db": {ar: "19 050", netto: "15 000"},
  "gumiszerelés 20'-ig Ft/4 db": {ar: "25 275", netto: "19 902"},
  "vonóhorog szerelés": {ar: "130 000", netto: "102 362"},
  "kamera szerelés": {ar: "150 000", netto: "118 110"},
  "első vagy hátsó sárfogó szerelés": {ar: "15 000", netto: "11 811"},
  "első és hátsó sárfogó szerelés": {ar: "30 000", netto: "23 622"},
  "légterelő szerelés": {ar: "8 000", netto: "6 300"},
  "felépítmény szerelés": {ar: "100 000", netto: "78 740"},
  "váltózár szerelés": {ar: "45 000", netto: "35 433"},
  "riasztó szerelés": {ar: "35 000", netto:  "27 560"},
  "lökhárító fólia szerelés": {ar: "15 000", netto: "11 811"},
  "VW/Skoda appconnect szerelés": {ar: "25 000", netto: "19 685"},
  "Audi Smartphone szerelés": {ar: "150 000", netto: "118 110"},
  "tükörmonitor + kamera szerelés": {ar: "84 000", netto: "66 000"},
  "külön tájékoztató alapján": {ar: ""}
};

let bruttoNettoAllapot = true;  // true: bruttó, false: netto

document.addEventListener('DOMContentLoaded', function () {
  initSzolgaltatasDropdown();
  updateMunkadij();

  document.querySelector('.x45').addEventListener('click', function () {
    bruttoNettoAllapot = !bruttoNettoAllapot;
    updateMunkadij();   //frissítjuk a munkadijat az új állapot alapján
    //a cellák szövegének frissítése az új állapotnak megfelelően
    this.textContent = bruttoNettoAllapot ? "Bruttó ár" : "Nettó ár";
    document.querySelector('.x31').textContent = bruttoNettoAllapot ? "Összesen bruttó" : "Összesen nettó";
  });
});

function initSzolgaltatasDropdown() {
  const szolgaltatasSelectElem = document.getElementById("kerekszereles");
  szolgaltatasSelectElem.innerHTML = ""; //meglévő opciók eltávolítása

  Object.keys(szolgaltatasok).forEach(szolgaltatasNev => {
    const option = document.createElement("option");
    option.value = szolgaltatasNev;
    option.textContent = szolgaltatasNev;
    szolgaltatasSelectElem.appendChild(option);
  });

}

function updateMunkadij() {
  const valasztottSzolgaltatas = document.getElementById("kerekszereles").value;
  const munkadijElem = document.getElementById("munkadij");
  const kivalasztottSzolgaltatasAdatok = szolgaltatasok[valasztottSzolgaltatas];

  if (valasztottSzolgaltatas === "") {
    munkadijElem.textContent = "0 Ft";
    // frissitOsszesen();
    return;
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

  let isConstentVisible = true; //a tartalom látható kezdetben

  oneVar.addEventListener('click', function () {
    isConstentVisible = !isConstentVisible;
    if (!isConstentVisible) {
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
  const clearText = text.replace(" Ft", "").replace(/\s+/g, ''); //Eltávolítjuk a Ft-ot és az összes szóközt
  const numb = parseFloat(clearText);  //konv. tisztított szöveg számmá
  return !isNaN(numb) ? numb : 0;
}

const munkadijElem = document.getElementById('munkadij');
const osszesenBruttoElem = document.getElementById('osszesenBrutto');
const osszesenBruttoElem2 = document.getElementById('osszesenBrutto2');
const osszesenBruttoElem3 = document.getElementById('osszesenBrutto3');
const osszesenElem = document.getElementById('osszesen_1');
const osszesenElem2 = document.getElementById('osszesen_2');
const osszesenElem3 = document.getElementById('osszesen_3');

const munkadij = konvertSzamma(munkadijElem.textContent);
const osszesenBrutto = konvertSzamma(osszesenBruttoElem.textContent);
const osszesenBrutto2 = konvertSzamma(osszesenBruttoElem2.textContent);
const osszesenBrutto3 = konvertSzamma(osszesenBruttoElem3.textContent);

function frissitOsszesen() {
  let osszesen = munkadij + osszesenBrutto + osszesenBrutto2 + osszesenBrutto3;
  osszesenElem.textContent = osszesen.toLocaleDateString("hu-HU") + " Ft";
}

function frissitOsszesen2() {
  let osszesen = munkadij + osszesenBrutto;
  let osszesen2 = munkadij + osszesenBrutto2;
  let osszesen3 = munkadij + osszesenBrutto3;

  osszesenElem.textContent = osszesen.toLocaleString("hu-HU") + " Ft";
  osszesenElem2.textContent = osszesen2.toLocaleString("hu-HU") + " Ft";
  osszesenElem3.textContent = osszesen3.toLocaleString("hu-HU") + " Ft";
}

document.getElementById('brutto_ar3').addEventListener('change', frissitOsszesen2);
document.getElementById('db3').addEventListener('change', frissitOsszesen2);
document.getElementById('brutto_ar2').addEventListener('change', frissitOsszesen2);
document.getElementById('db2').addEventListener('change', frissitOsszesen2);
document.getElementById('kerekszereles').addEventListener('change', frissitOsszesen2);
document.addEventListener('DOMContentLoaded', frissitOsszesen2);

//1. kép feltöltése
document.getElementById('kepCella').addEventListener('click', function () {
  const imageInput = document.getElementById('kepValaszto');
  imageInput.click();
});
document.getElementById('kepValaszto').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const kepCella = document.getElementById('kepCella');
      kepCella.innerHTML = ''; // Előző kép eltávolítása
      const img = new Image();
      img.src = e.target.result; // A beolvasott kép forrása

      img.className = 'felni';
      kepCella.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
})

//2. kép
document.getElementById("kepCella2").addEventListener('click', function () {
  const imageInput = document.getElementById("kepValaszto2");
  imageInput.click();
})

document.getElementById("kepValaszto2").addEventListener('change', function (e) {
  const file2 = e.target.files[0];
  if (file2 && file2.type.startsWith('image/')) {
    const reader2 = new FileReader();
    reader2.onload = function (e) {
      const kepCella2 = document.getElementById('kepCella2');
      kepCella2.innerHTML = '';
      const img2 = new Image();
      img2.src = e.target.result;

      img2.className = 'felni';
      kepCella2.appendChild(img2);
    };
    reader2.readAsDataURL(file2);
  }
})

//3. kép feltöltése
document.getElementById('kepCella3').addEventListener('click', function () {
  const imageInput = document.getElementById('kepValaszto3');
  imageInput.click();
});

document.getElementById('kepValaszto3').addEventListener('change', function (e) {
  const file2 = e.target.files[0];
  if (file2 && file2.type.startsWith('image/')) {
    const reader2 = new FileReader();
    reader2.onload = function (e) {
      const kepCella2 = document.getElementById('kepCella3');
      kepCella2.innerHTML = '';
      const img2 = new Image();
      img2.src = e.target.result;

      img2.className = 'felni';
      kepCella2.appendChild(img2);
    };
    reader2.readAsDataURL(file2);
  }
});

//utolsó sor kattintásra eltűnik/megjelenik
document.addEventListener('DOMContentLoaded', () => {
  const cella = document.getElementById('toggleText');
  let textDisable = false;

  cella.addEventListener('click', () => {
    if (textDisable) {
      cella.textContent = "Finomszemű hólánc alkalmazása csak a járműgyártó által jóváhagyott hólánccal lehetséges azon a tengelyen, amelyre a jármű kezelési utasítása engedélyezi.";
      textDisable = false;
    } else {
      cella.textContent = '';
      textDisable = true;
    }
  });
});

//brutto-netto ár kiszámítása és megjelenítése
document.addEventListener('DOMContentLoaded', () => {
  let bruttoNettoAllapot = true;
  const bruttoArCella = document.querySelector('.x45');
  const osszesenBruttoCella = document.querySelector('.x31');
  const autoraCella = document.querySelector('.autora');

  bruttoArCella.addEventListener('click', () => {
    if (bruttoNettoAllapot) {
      bruttoArCella.textContent = 'Nettó ár';
      osszesenBruttoCella.textContent = 'Összesen nettó';
      autoraCella.textContent = 'Az autóra felszerelés költsége nettó:';
      bruttoNettoAllapot = false;
    } else {
      bruttoArCella.textContent = 'Bruttó ár';
      osszesenBruttoCella.textContent = 'Összesen bruttó';
      autoraCella.textContent = 'Az autóra felszerelés költsége bruttó:';
      document.getElementById('x80').textContent = "";
      document.getElementById('x90').textContent = "";
      document.getElementById('x100').textContent = "";
      bruttoNettoAllapot = true;
      return;
    }

    // "osszesen_1", "osszesen_2" értékének lekérése és konvertálása számmá
    const osszesen1Ertek = parseFloat(document.getElementById('osszesen_1').textContent.replace(/\D/g, ''));
    const osszesen2Ertek = parseFloat(document.getElementById('osszesen_2').textContent.replace(/\D/g, ''));
    const osszesen3Ertek = parseFloat(document.getElementById('osszesen_3').textContent.replace(/\s+/g, ''));

    const afa = 1.27;

    // "x80", "x90", "x100" értékének beállítása áfa szorzatával, ha nettóban vagyunk
    document.getElementById('x80').textContent = bruttoNettoAllapot ? "" : "Bruttó:" + Math.round((osszesen1Ertek * afa)).toLocaleString('hu-HU') + ' Ft';
    document.getElementById('x90').textContent = bruttoNettoAllapot ? "" : "Bruttó:" + Math.round((osszesen2Ertek * afa)).toLocaleString('hu-HU') + ' Ft';
    document.getElementById('x100').textContent = bruttoNettoAllapot ? "" : "Bruttó:" + Math.round((osszesen3Ertek * afa)).toLocaleString('hu-HU') + ' Ft';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dbCella = document.getElementById('x54');

  if (dbCella) {
    dbCella.addEventListener('click', () => {
      if (dbCella.textContent === 'db') {
        dbCella.textContent = 'garn.';
      } else {
        dbCella.textContent = 'db';
      }
    });
  }
});

//vizsgáztatás kiválasztása klikkeléssel
document.addEventListener('DOMContentLoaded', () => {
  const vizsgaztatasCella = document.getElementById('vono');

  const texts = [
    "A fenti ajánlat nem tartalmazza a vizsgát! - korlátozott vizsga 16.000 - 25.000 Ft",
    "A fenti ajánlat nem tartalmazza a vizsgát! - normál vizsga 35.000 Ft",
    "A fenti ajánlat nem tartalmazza a vizsgát! - normál 4x4 vizsga 42.300 Ft",
    "A fenti ajánlat nem tartalmazza a vizsgát! - teherautó normál vizsga 35.800 Ft",
    "A fenti ajánlat nem tartalmazza a vizsgát! - teherautó 4x4 vizsga 42.200 Ft",
    "A fenti ajánlat nem tartalmazza a vizsgát! - Elektromos autó vizsga 36.900 Ft",
    "A fenti ajánlat nem tartalmazza a vizsgát! - Prémium autó vizsga 46.800 Ft (Touareg/Audi)",
    ""
  ];
  let representIndex = 0;

  if (vizsgaztatasCella) {
    vizsgaztatasCella.addEventListener('click', () => {
      representIndex = (representIndex + 1) % texts.length;
      vizsgaztatasCella.textContent = texts[representIndex];
    });
  }
});

//kattintásre eltüntetjük/megjelenítjük a 2-3. sort
var x71Elem = document.getElementById('tableX71');
var x71Elem1 = document.getElementById('tableX72');
var tablaSor = document.getElementById("tablaSor");
var tablaSor1 = document.getElementById("tablaSor1");
var tablaSor2 = document.getElementById("secRowCollapse");
var tablaSor3 = document.getElementById("thirdRowCollapse");

var tablaSor2Visible = true;

x71Elem.addEventListener('click', function () {
  if (tablaSor2Visible) {
    tablaSor.style.display = "none";
    tablaSor2.style.display = "none";
    tablaSor3.style.display = "none";
    tablaSor2Visible = false;
  } else {
    tablaSor.style.display = "table-row";
    tablaSor2.style.display = "table-row";
    tablaSor2Visible = true;
  }
});

x71Elem1.addEventListener('click', function () {
  if (tablaSor2Visible) {
    tablaSor1.style.display = "none";
    tablaSor3.style.display = "none";
    tablaSor2Visible = false;
  } else {
    tablaSor1.style.display = "table-row";
    tablaSor2.style.display = "table-row";
    tablaSor3.style.display = "table-row";
    tablaSor2Visible = true;
  }
});



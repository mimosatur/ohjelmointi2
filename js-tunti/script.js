"use strict"

// window viittaa aina selainikkunaan
console.log(window);

// window.alert('Selainikkuna huutelee!');

const isTrue = window.confirm('On totta?');
console.log(isTrue)

// window.location viittaa selainikkunan osoitteeseen (url)
console.log(window.location.host);
window.location.href = 'page2.html'; // suhteellinen sijainti
// window.location.href = 'https//www.metropolia.fi'; // absoluuttinen sijainti
// jos ei olis https edessä niin etsisi www.metropolia nimistä tiedostoa

// DOM 
// document viittaa html-tiedostosta ladattuun rakenteeseen (DOM)
console.log(window.document);

// haetaan viittaus DOM-elementtiin
const liElements = document.getElementsByTagName(li);
console.log(liElements);
liElements[0].textContent = 'ensimmäinen elementti päivitetty skriptistä';

// sama käyttäen css-valitsinta (css selector)
document.querySelectorAll('li');
// tähän palautuu koko taulukko
liElements[1].textContent = 'Toinen päivitetty'

// querySelector() palauttaa aina vain yhden löydetyn elementin (ensin)
const outputElement = document.querySelector('#outuput');
outputP.textContent = 'Sisältö skriptistä.';


// tehdään uusi lista taulukon perusteella ja lisätään se DOMiin
const inventoryItems = ['miekka', 'kilpi', 'porkkana'];
// 1. haetaan dom-viittaus div-"laatikkoon/containeriin"
const inventoryDiv = document.querySelector('#inventory');
// 2. haetaan viittaus divin sisällä olevaan ol-elementtiin
const inventoryList = inventoryDiv.querySelector('ol');   // otetaan jatkokehitys huomioon tyyppinen ratkaisu
// 3. rakennetaan html listalle
let listHTML = '';
for (let i=0; i<inventoryItems.length; i++) {
    listHTML = listHTML + '<li>' + inventoryItems[i] + '</li>';
}
console.log('html stringi:', listHTML);
// 4. lisätään generoitu html ol-elementin sisään 
inventoryList.innerHTML = listHTML;

// TOINEN (ehkä työläämpi, mutta suositeltu) tapa:
// 3. luodaan DOM-elementit jokaiselle taulukon alkiolle/listan elementille
// ja liitetään DOMin ol-elementin lapsiksi
for (let i=0; i<inventoryItems.length; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = inventoryItems[i];
    inventoryList.append(newLi);
}
// for (const item of inventoryItems) // käy läpi kaikki listan alkiot (for of)

const displayInventory = confirm('Näytetäänkö inventaario?');
if (displayInventory) {
    inventoryDiv.classList.remove('hidden');
}

// Inventaarion näyttämien nappulaan sidotun tapahtumankäsittelijän avulla
const button = document.querySelector('button');
// Napin tekstin muuttamista varten tarvitsee tietää, onko lista näkyvissä vai ei
let isInventoryVisible = false;
button.addEventListener('click', function (event) {
    console.log('napin click-event-olio', event)
    inventoryDiv.classList.toggle('hidden');   // toggle katsoo onko sisältö siellä
    isInventoryVisible = !isInventoryVisible;
    if (isInventoryVisible) {
    button.textContent = 'Piilota esineet';
    } else {
        button.textContent = 'Näytä esineet';
    }
});
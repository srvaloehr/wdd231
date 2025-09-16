document.addEventListener('DOMContentLoaded', function () {

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
    //console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets); //"prophets" is the array 
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let date = document.createElement("p");
        let place = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        date.textContent = `Date of Birth: ${prophet.birthdate}`
        place.textContent = `Place of Birth: ${prophet.birthplace}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("height", 240)
        portrait.setAttribute("width", 200)

        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card); 

    });
}

    /* footer */
    const Year = new Date().getFullYear();
    const YearSpan = document.getElementById('currentyear');

    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');

    if (YearSpan) {
        YearSpan.textContent = Year;
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
    }

});
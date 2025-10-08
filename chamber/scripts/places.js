async function loadPlaces() {
    const response = await fetch('./data/places.json');
    const data = await response.json();
    displayPlaces(data.places);
}

const cards = document.querySelector("#cards");
loadPlaces()

const displayPlaces = (places) => {
    places.forEach((place) => {
        
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let image = document.createElement("img");
        let button = document.createElement("button")

        name.textContent = place.name;
        address.textContent = place.address
        description.textContent = place.description
        button.textContent = `learn more`

        image.setAttribute("src", place.photo);
        image.setAttribute("alt", `image of ${place.photo} `);
        image.setAttribute("loading", "lazy");
        image.setAttribute("height", 300)
        image.setAttribute("width", 200)

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        pCards.appendChild(card); 
    });

}
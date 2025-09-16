const cards = document.querySelector("#cards"); 

async function loadMembers() {
  const response = await fetch('./data/members.json');
  const data = await response.json();
  displayMembers(data.members);
}
loadMembers();

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("p");
    let imageurl = document.createElement("img");

    name.textContent = member.name;
    address.textContent = `ADDRESS: ${member.address.street}`;
    phone.textContent = `PHONE: ${member.phone}`;
    url.textContent = `URL: ${member.website}`;

    imageurl.setAttribute("src", member.imageurl);
    imageurl.setAttribute("alt", `image of ${member.name}`);
    imageurl.setAttribute("loading", "lazy");
    imageurl.setAttribute("height", 100);
    imageurl.setAttribute("width", 100);

    card.appendChild(name);
    card.appendChild(imageurl);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);

    cards.appendChild(card);
  });
};

// grid/list toggle
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

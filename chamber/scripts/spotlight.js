const spotlight = document.querySelector("#spotlight");

const displayMembers = (members) => {
    const options = members.filter(
        (member) => member.membershiplevel === "gold" || member.membershiplevel === "silver"
    );

    const random = options.sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 3);

    selected.forEach((member) => {
        let card = document.createElement("section");

        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let level = document.createElement("h4");
        let imageurl = document.createElement("img");

        name.textContent = member.name;
        address.textContent = `Address: ${member.address.street}`;
        phone.textContent = `Phone: ${member.phone}`;
        url.textContent = member.website;
        url.href = member.website;
        url.target = "_blank";
        level.textContent = `Membership Level: ${member.membershiplevel}`;

        imageurl.setAttribute("src", member.imageurl);
        imageurl.setAttribute("alt", `Logo of ${member.name}`);
        imageurl.setAttribute("loading", "lazy");
        imageurl.setAttribute("height", "100");
        imageurl.setAttribute("width", "100");

        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(imageurl);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        spotlight.appendChild(card);
    });
};

async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        displayMembers(data.members);
    } catch (err) {
        console.error("Error loading members:", err);
    }
}

loadMembers();
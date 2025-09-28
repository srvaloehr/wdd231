async function loadMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

const spotlight = document.querySelector("#spotlight");

loadMembers();

const displayMembers = (members) => {
    
        const options = members.filter(member => member.membershiplevel == "gold" | member.membershiplevel == "silver" );
        const random = options.sort(() => 0.5 - Math.random());
        const selected = random.slice(0, 3);
        
        selected.forEach((member) => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("p");
            let level = document.createElement("h4");

            let imageurl = document.createElement("img");

            name.textContent = member.name;
            address.textContent = `ADDRESS: ${member.address.street}`
            phone.textContent = `PHONE: ${member.phone}`
            url.textContent = `URL: ${member.website}`
            level.textContent = `membership level ⁂ ${member.membershiplevel}`

            imageurl.setAttribute("src", member.imageurl);
            imageurl.setAttribute("alt", `image of ${member.imageurl} `);
            imageurl.setAttribute("loading", "lazy");
            imageurl.setAttribute("height", 100)
            imageurl.setAttribute("width", 100)

            card.appendChild(name);
            card.appendChild(level);
            card.appendChild(imageurl);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);

            spotlight.appendChild(card); //"spotlight" is the id in the html
        
    });

}
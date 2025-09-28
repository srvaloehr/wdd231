// membership levels

const memberships = [
    {
        subject: 'NP 💸 Membership Level',
        title: 'for non-profit organizations',
        description: 'Ideal for registered nonprofits seeking access to essential resources without financial barriers. Includes full platform access, community support, and collaboration tools at no cost.',
        price: '0.0 $ '
    },
    {
        subject: 'Bronze 🥉 Membership Level',
        title: 'Starter Membership',
        description: 'Perfect for individuals or small teams beginning their journey. Includes basic platform access, limited support, and access to community forums.',
        price: '19.99 $ '
    },
    {
        subject: 'Silver 🥈 Membership Level',
        title: 'Growth Membership',
        description: 'Designed for growing teams needing more flexibility. Includes full platform access, priority support, analytics dashboard, and monthly strategy sessions.',
        price: '49.99 $ '
    },
    {
        subject: 'Gold 🏆 Membership Level',
        title: 'Premium Membership',
        description: 'Tailored for organizations seeking maximum impact. Includes all Silver benefits plus dedicated account manager, custom integrations, early feature access, and exclusive networking events.',
        price: '99.99 $ '
    }
];


createMembershipCards(memberships);

function createMembershipCards(filteredMemberships) {
    document.querySelector(".container").innerHTML = "";
    filteredMemberships.forEach(membership => {

        let card = document.createElement("section")
        let content = document.createElement("p")

        content.textContent = membership.subject
        card.append(content);
        document.querySelector(".container").appendChild(card);

        card.addEventListener('click', () => {
            displayMembershipDetails(membership);
        });
    })

}


// dialog


const membershipDetails = document.getElementById('membership-details');

function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = '';
    membershipDetails.innerHTML =
        `<button id="closeModal">❌</button>
    <h3>${membership.subject}</h3>
    <h4>${membership.title}</h4>
    <p><strong>Benefits</strong>: ${membership.description}</p>
    <p>${membership.price}<strong>/ month</strong></p>`;
    membershipDetails.showModal();

    closeModal.addEventListener("click", () => {
        membershipDetails.close();
    });
}
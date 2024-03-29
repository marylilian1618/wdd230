const spotlighturl = 'https://weylin76.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#spotlights');
let num = 0;

// Function to fetch business data from the JSON file
async function getbusinesses() {
    let response = await fetch(spotlighturl);
    if (response.ok) {
        let businessList = await response.json();
        buildcards(businessList);
        console.log(businessList);
    } else {
        throw Error(response.statusText); // Throw an error if response is not OK
    }
}

// Function to build HTML cards for businesses
function buildcards(info) {
    let data = info.BusinessInformation.filter((p) => p.membershipLevel === "Gold" || p.membershipLevel === "Silver");

    for (let i = 0; i < 3; i++) {
        let business = data[Math.floor(Math.random() * data.length)];
        data = data.filter((b) => b !== business);

        let card = document.createElement("div");
        card.classList.add('white-border');
        card.classList.add('border');
        card.classList.add('spotlights');
        card.setAttribute("id", `spot ${num}`);
        card.style.padding = '.5rem'
        num++;

        let h3 = document.createElement("h3");
        h3.innerHTML = `${business.name}`;
        h3.style.fontSize = '1.5rem'

        let picture = document.createElement("picture");
        let img = document.createElement("img");
        img.setAttribute("src", `${business.image}`);
        img.setAttribute("alt", `${business.alt}`);
        picture.appendChild(img);

        let phone = document.createElement("p");
        phone.innerHTML = `${business.phone}`;

        let membership = document.createElement("p");
        membership.innerHTML = `Membership Level: ${business.membershipLevel}`;

        card.appendChild(h3);
        card.appendChild(picture);
        card.appendChild(phone);
        card.appendChild(membership);

        cards.appendChild(card);
    }
}

getbusinesses();


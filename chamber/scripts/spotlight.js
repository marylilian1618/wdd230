const Url = 'https://marylilian1618.github.io/wdd230/chamber/data/members.json';
const cardsContainer = document.querySelector('#spotlights');

async function getSpotlight() {
    try {
        const response = await fetch(Url);
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data.directory);
        } else {
            throw Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(businessData) {
    const goldAndSilverBusinesses = businessData.filter(business => {
        return business.membership === "Gold" || business.membership === "Silver";
    });
    shuffleArray(goldAndSilverBusinesses);
    for (let i = 0; i < Math.min(3, goldAndSilverBusinesses.length); i++) {
        const business = goldAndSilverBusinesses[i];
        createCard(business);
    }
}

function createCard(business) {
    const card = document.createElement("div");
    card.classList.add("card");

    const nameElement = document.createElement("h3");
    nameElement.textContent = business.names;

    const imageElement = document.createElement("img");
    imageElement.src = business.image;
    imageElement.alt = business.names + " Image";

    const phoneElement = document.createElement("p");
    phoneElement.textContent = "Phone: " + business.number;

    const membershipElement = document.createElement("p");
    membershipElement.textContent = "Membership Level: " + business.membership;

    card.appendChild(nameElement);
    card.appendChild(imageElement);
    card.appendChild(phoneElement);
    card.appendChild(membershipElement);

    cardsContainer.appendChild(card);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

getSpotlight(); 

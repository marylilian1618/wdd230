const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);//expects an array parameter

}
getProphetData();
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let placeBirth = document.createElement('p');
        let portrait = document.createElement('img');

        //build the h2 content to show prophet name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440')

        //append to card elements created
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        //append each section called card to id 'cards'
        cards.appendChild(card);
    });
}
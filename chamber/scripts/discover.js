const base = "https://marylilian1618.github.io/wdd230/";
const url = "https://marylilian1618.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#grid");
async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);
    displayMembers(data.directory);

}
getMembersData();

const displayMembers = (directory) => {
    directory.forEach(member => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let tadress = document.createElement('h3');
        let address = document.createElement('p');
        let tnumber = document.createElement('h3');
        let number = document.createElement('p');
        let twebsite = document.createElement('h3');
        let website = document.createElement('p');
        let membership = document.createElement('h3');

        // Build the image portrait by setting all the relevant attributes
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Image of ${member.names}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '300');

        //build the h2 content to show prophet name
        tadress.textContent = `Address`;
        address.textContent = `${member.address}`;
        tnumber.textContent = `Phone Number`;
        number.textContent = `${member.number}`;
        twebsite.textContent = `Website`;
        website.textContent = `${member.website}`;
        membership.textContent = `${member.membership}`;

        //append to card elements created
        card.appendChild(image);
        card.appendChild(tadress);
        card.appendChild(address);
        card.appendChild(tnumber);
        card.appendChild(number);
        card.appendChild(twebsite);
        card.appendChild(website);
        card.appendChild(membership);

        //append each section called card to id 'cards'
        cards.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const url = "https://marylilian1618.github.io/wdd230/chamber/data/members.json";


    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");


    let currentView = "grid"; // Current grid cards


    gridbutton.addEventListener("click", () => toggleView("grid"));
    listbutton.addEventListener("click", () => toggleView("list"));


    async function getMembersData() {
        const response = await fetch(url);
        const data = await response.json();
        clearDisplay();
        if (currentView === "grid") {
            displayMembersCard(data.directory);
        } else {
            displayMembersList(data.directory);
        }
    }


    function toggleView(view) {
        if (currentView !== view) {
            currentView = view; // Update the current view
            clearDisplay()
            if (view === "grid") {
                display.classList.add("discover-grid");
                display.classList.remove("discover-list");
                getMembersData();
            } else {
                display.classList.add("discover-list");
                display.classList.remove("discover-grid");
                getMembersData();
            }
        }
    }


    function clearDisplay() {
        display.innerHTML = ''; // Clear display
    }


    /* Directory in cards */
    const cards = document.querySelector(".discover-grid");


    const displayMembersCard = (directory) => {
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



            image.src = member.image;
            image.alt = `Image of ${member.names}`;
            image.loading = 'lazy';
            image.width = '200';
            image.height = '300';


            tadress.textContent = `Address`;
            address.textContent = member.addresses;
            tnumber.textContent = `Phone Number`;
            number.textContent = member.number;
            twebsite.textContent = `Website`;
            website.textContent = member.website;
            membership.textContent = member.membership;



            card.appendChild(image);
            card.appendChild(tadress);
            card.appendChild(address);
            card.appendChild(tnumber);
            card.appendChild(number);
            card.appendChild(twebsite);
            card.appendChild(website);
            card.appendChild(membership);

            cards.appendChild(card);
        });
    }

    const displayMembersList = (directory) => {
        directory.forEach(member => {
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let address = document.createElement('p');
            let number = document.createElement('p');
            let website = document.createElement('p');


            name.textContent = member.names;
            address.textContent = `Address: ${member.addresses}`;
            number.textContent = `Phone Number: ${member.number}`;
            website.textContent = `Website: ${member.website}`;



            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(number);
            card.appendChild(website);

            cards.appendChild(card);
        });
    }


    getMembersData();
});
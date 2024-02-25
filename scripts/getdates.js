document.addEventListener('DOMContentLoaded', function () {
    const YearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    YearElement.textContent = `© ${currentYear}`;

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;
});

/*-----------------*/
const visitsDisplay = document.querySelector(".visits");
/*will show the number of visits*/
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//now determine the visits
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;

} else {
    visitsDisplay.textContent = "This is your first visit. WELCOME ❤️";

}
//increment the number of visits by 1
numVisits++
//stire the new visit total into localstorage
localStorage.setItem("numVisits-ls", numVisits);
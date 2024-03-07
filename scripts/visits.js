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
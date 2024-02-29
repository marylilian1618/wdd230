//get the current date
var currentDate = new Date().getTime();
//retrieve the last visit date from localStorage
var lastVisitDate = localStorage.getItem('lastVisitDate');
// conditionaal
if (lastVisitDate) {
    //convert the last vidate from string to miliseconds
    lastVisitDate = new Date(parseInt(lastVisitDate, 10)).getTime();
    var timeDifference = currentDate - lastVisitDate;
    //convert miliseconds to days
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    //change the message with if
    if (daysDifference === 0) {
        document.getElementById('message').textContent = "Back so soon! Awesome!"
    }
    else {
        var message = daysDifference === 1 ? "day" : "days";
        document.getElementById('message').textContent = "You last visited " + daysDifference + " " + message + " ago.";
    }
}
else {
    // set the current date as the las visit date in localstorage
    localStorage.setItem('lastVisitDate', currentDate);
    document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
}
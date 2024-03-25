// Check if the current day is Monday, Tuesday, or Wednesday
function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    return (dayOfWeek >= 1 && dayOfWeek <= 3); // Monday, Tuesday, or Wednesday
}

// Function to close the banner
function closeBanner() {
    document.getElementById("banner").style.display = "none";
}

// Function to show or hide the banner based on the current day
function showHideBanner() {
    const banner = document.getElementById("banner");
    if (isBannerDay()) {
        banner.classList.add("show");
    } else {
        banner.classList.remove("show");
    }
}

// Run the showHideBanner function when the page loads
window.onload = function () {
    showHideBanner();
};

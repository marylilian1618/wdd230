function validatePassword() {
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;

	if (password1 !== password2) {
		alert("Passwords do not match. Please try again.");
		document.getElementById("password1").value = "";
		document.getElementById("password2").value = "";
		document.getElementById("password1").focus();
		return false;
	}
	return true;
}

//---------------------------------//

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
	rangevalue.innerHTML = range.value;
}
const rentalURL = "https://marylilian1618.github.io/wdd230/data/rentals.json";
const tableBody = document.querySelector('#rentalTable tbody');

async function getData() {
    try {
        const response = await fetch(rentalURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayRentals(data.rentaltypes);
    } catch (error) {
        console.error('Error fetching rental data:', error);
    }
}

function displayRentals(rentalData) {
    try {
        rentalData.forEach(rental => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rental.rentaltype}</td>
                <td>${rental.maxpersons}</td>
                <td>${rental.reservation ? rental.reservation.halfday : '-'}</td>
                <td>${rental.reservation ? rental.reservation.fullday : '-'}</td>
                <td>${rental.walkin ? rental.walkin.halfday : '-'}</td>
                <td>${rental.walkin ? rental.walkin.fullday : '-'}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error displaying rental data:', error);
    }
}


document.addEventListener('DOMContentLoaded', getData);
document.addEventListener('DOMContentLoaded', function () {
    const YearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    YearElement.textContent = `© ${currentYear}`;

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;
});


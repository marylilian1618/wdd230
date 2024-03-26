const dayOfWeek = new Date().getDay();

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    document.addEventListener('DOMContentLoaded', () => {
        let banner = document.querySelector('#banner');
        let container = document.createElement('div');
        let message = document.createElement('h3');
        let button = document.createElement('button');

        message.textContent = 'Please join us at the chamber of commerence meet and greet this Wednesday at 7:00 PM'
        button.textContent = '❌'

        container.appendChild(message);
        container.appendChild(button);
        banner.appendChild(container);

        button.addEventListener('click', () => {
            container.removeChild(message);
            container.removeChild(button);
        })
    })
}
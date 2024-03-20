const baseURL = "https://marylilian1618.github.io/wdd230/";
const linksURL = "https://marylilian1618.github.io/wdd230/data/links.json";
const linkContainer = document.querySelector("#link");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function displayLinks(lessons) {
    lessons.forEach(lesson => {
        const lessonHeading = document.createElement('h3');
        lessonHeading.textContent = `Week ${lesson.lesson}`;
        linkContainer.appendChild(lessonHeading);

        const ol = document.createElement('ol');
        lesson.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = baseURL + link.url;
            a.textContent = link.title;
            li.appendChild(a);
            ol.appendChild(li);
        });

        linkContainer.appendChild(ol);
    });
}
getLinks();


const baseURL = "https://marylilian1618.github.io/wdd230/";
const linksURL = "https://marylilian1618.github.io/wdd230/data/links.json";
async function GetLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);


}
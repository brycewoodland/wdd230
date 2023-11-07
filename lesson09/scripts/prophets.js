const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let section = document.createElement("section");
        let sectionHTML = `
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>${prophet.birthdate}</p>
        <p>${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="Picture of: ${prophet.name} ${prophet.lastname}">`
        section.innerHTML = sectionHTML;
        cards.appendChild(section);
    })
}
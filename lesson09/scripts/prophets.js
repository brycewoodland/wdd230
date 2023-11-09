const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let section = document.createElement("section");
        section.classList.add("card");
        let sectionHTML = `
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>${prophet.birthdate}</p>
        <p>${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="Picture of: ${prophet.name} ${prophet.lastname}">`
        section.innerHTML = sectionHTML;
        cards.appendChild(section);
    });
}

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    }
    else {
        console.error("Doesn't work")
    }
}

getProphetData();
const gridSelector = document.querySelector('#directory-grid');
const listSelector = document.querySelector('#directory-list');
const directorySelector = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=> {
    if (!gridSelector.classList.contains('activeMode')) {
        gridSelector.classList.add('activeMode');
        listSelector.classList.remove('activeMode');
        directorySelector.classList.add('directory-cards');
        directorySelector.classList.remove('directory-list');
    }
});

listSelector.addEventListener('click', ()=> {
    if (!listSelector.classList.contains('activeMode')) {
        listSelector.classList.add('activeMode');
        gridSelector.classList.remove('activeMode');
        directorySelector.classList.add('directory-list');
        directorySelector.classList.remove('directory-cards');
    }
});

const url = "./data/members.json";

const displayMembers = (members) => {
    const cards = document.querySelector('.directory-cards');

    members.forEach((members) => {
        let card = document.createElement("section");
        card.innerHTML = `
        <img src="${members.imageURL}">
        <p>${members.name}</p>
        <p>${members.address}</p>
        <p><a class="card-button" href="${members.websiteURL}">Website</a></p>`;
        if (members.membershipLevel == 'gold') {
            card.classList.add('gold-member');
        }
        cards.appendChild(card);
    });
};

async function getMemberData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // console.table(data.prophets);
        displayMembers(data.members);
    }
    else {
        console.error("Doesn't work")
    }
}

getMemberData();
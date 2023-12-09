let url = new URL(window.location);
let params = url.searchParams;

for (const p of params) {
    console.log(p);
}

async function getFruitNameById(fruitId) {
    const response = await fetch('fruits.json');
    const fruitsData = await response.json();

    const fruit = fruitsData.find(f => f.id.toString() === fruitId);
    return fruit ? fruit.name : 'Unknown Fruit';
}

document.querySelector('#yourname').textContent = params.get("firstName");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phoneNumber");
document.querySelector('#fruit1').textContent = getFruitNameById(params.get("fruit1"));
document.querySelector('#fruit2').textContent = getFruitNameById(params.get("fruit2"));
document.querySelector('#fruit3').textContent = getFruitNameById(params.get("fruit3"));
document.querySelector('#specialinstructions').textContent = params.get("specialInstructions");


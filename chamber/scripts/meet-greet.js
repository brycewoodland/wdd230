let meetgreet = new Date();
let dayOfWeek = meetgreet.getDay();

if (dayOfWeek == 1, 2, 3)
{
    let meetgreet = document.getElementById('meetgreet');
    meetgreet.style.display = 'block';
}

let x = document.getElementById('closegreet');

x.addEventListener('click', ()=> {
    let meetgreet = document.getElementById('meetgreet');
    meetgreet.style.display = 'none';
})
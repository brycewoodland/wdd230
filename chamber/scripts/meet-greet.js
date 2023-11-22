let meetgreet = new Date();
let dayOfWeek = meetgreet.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3)
{
    let meetgreet = document.querySelector('#meetgreet');
    meetgreet.style.display = 'block';
}

let x = document.querySelector('#closegreet');

x.addEventListener('click', ()=> {
    let meetgreet = document.querySelector('#meetgreet');
    meetgreet.style.display = 'none';
})
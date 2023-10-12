const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value == '')
    {
        input.focus()
        return
    }
    
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = input.value;
    deletebutton.textContent = '❌';
    li.appendChild(deletebutton);
    list.appendChild(li);

    deletebutton.addEventListener('click', function (){
        li.remove();
    })

    input.focus();
    input.value = '';
});
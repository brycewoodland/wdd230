const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input.value != '')
    {
        console.log('Please enter a scripture.');
    }
});

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = X;
li.append(deleteButton);
list.append(li);

deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';
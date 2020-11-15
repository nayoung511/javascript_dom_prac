//single element
//console.log(document.getElementById('todo-form'));
//const form = document.querySelector("#todo-form");

//multiple element
//const items = document.querySelectorAll('.item');
// items.forEach((item)=>{
//     console.log(item)
// })

// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

//todos.remove();
//console.log(todos);

//todos.style.background = 'red';
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent = 'Hello';
// todos.lastElementChild.innerHTML = '<h1>Hello</h1>'


//event
const button = document.querySelector('.submit');
const todos = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');

//button.addEventListener(어떤 이벤트, 어떤 기능)
button.addEventListener('click', onSubmit);


function onSubmit(e){
    e.preventDefault(); //다음 페이지로 넘어가는거 방지 

    if(todoInput.value === ''){
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 2000);
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('item');
    todos.appendChild(li);
    todoInput.value = '';
}
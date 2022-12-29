
const button = document.getElementById('btn')
const ul = document.getElementById('ul')
const todo = document.getElementById('todo')

function createLi(content) {
  let li = document.createElement('li')

  li.textContent = content

  ul.appendChild(li)
}

if(localStorage.length > 0) {
  for (let i = 0; i<localStorage.length; i++) {
    createLi(localStorage.key(i))
  }
}


function addButtonAction(){
  if(todo.value === '') return

  createLi(todo.value)

  localStorage.setItem(todo.value, todo.value)

  todo.value = ''
}

button.addEventListener('click', addButtonAction)

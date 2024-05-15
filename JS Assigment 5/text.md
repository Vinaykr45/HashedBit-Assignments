// Q1 

function displayRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 41) - 20;
    document.getElementById('num').textContent = randomNumber;
    var resultDiv = document.getElementById('result');
    if (randomNumber < 0) {
        resultDiv.textContent = 'Cold';
    } else {
        resultDiv.textContent = 'Hot';
    }
}

// Q2

function ageChange(e){

 let age = e.target.value;
 console.log(age);
    let errorsHolder = document.getElementById('errors-holder');
    let submitButton = document.querySelector('button[type="submit"]');

    if (age < 5) {
        errorsHolder.textContent = 'You need to be atleast 5 years old to participate';
        submitButton.disabled = true;
    } else {
        errorsHolder.textContent = '';
        submitButton.disabled = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    let age = document.getElementById('q_age').value;
    let ownsPhone = document.getElementById('q_owns_phone').checked;
    let resultHolder = document.getElementById('result-holder');

    if (ownsPhone) {
        if (age < 13) {
            resultHolder.textContent = 'You are too young to have a phone';
        } else {
            resultHolder.textContent = 'Use your phone in moderation';
        }
    } else {
        if (age < 13) {
            resultHolder.textContent = 'You will get a phone soon';
        } else {
            resultHolder.textContent = 'You should get a phone';
        }
    }
 
}

// Q3 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const task = todoInput.value.trim();

        if (task !== '') {
        const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
    const taskName = document.createElement('span');
            taskName.textContent = task;
            const completeBtn = document.createElement('button');
            completeBtn.innerHTML = '<i class="fas fa-check"></i>';
            completeBtn.classList.add('complete-btn');
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.classList.add('trash-btn');
            todoItem.appendChild(taskName);
            todoItem.appendChild(completeBtn);
            todoItem.appendChild(deleteBtn);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });
    todoList.addEventListener('click', function(event) {
        const item = event.target;
        if (item.classList.contains('complete-btn')) {
            const todo = item.parentElement;
            todo.classList.toggle('completed');
        }
        if (item.classList.contains('trash-btn')) {
            const todo = item.parentElement;
            todo.remove();
        }
    });
});

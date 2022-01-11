
// useful functions 

const myCreateElementText = (tag, content) => {
    const newEle = document.createElement(tag);
    newEle.textContent = content;
    return newEle;
}

const myCreateElementHTML = (tag, html) => {
    const newEle = document.createElement(tag);
    newEle.innerHTML = html;
    return newEle;
}

// ----------------------------------------------------------------------------------------

// No Todo's

const todoList = document.querySelector(".todo-list");
const table = document.querySelector("#table");
const container = document.querySelector(".container")

if (!document.querySelector(".todo-list tr")) {
    table.style.display = "none";
    const todoEmptyMsg = myCreateElementText("h2", "Your To-do list is Empty!🐌");
    todoEmptyMsg.classList.add("to-center");
    container.append(todoEmptyMsg);
}

// proceed with addition of new todo 
const inputForm = document.querySelector("#input-form");
const todoInput = document.querySelector("#todoinput");

inputForm.addEventListener("submit", (e) => {
    e.preventDefault(); // to prevent the page from refreshing
    if (!todoInput.value) {
        alert("Todo cannot be Empty!");
    } else {

        if (container.querySelector("h2")) {
            container.querySelector("h2").remove();
        }

        table.style.display = "block"; // restore

        const newTodo = document.createElement("tr");

        newTodo.innerHTML =
            `
        <td>${todoInput.value}</td>
        <td>
        <button class="btn btn-done">Done</button>
        <button class="btn btn-remove">Remove</button>
        </td>
        `
        newTodo.classList.add("todo");
        todoInput.value = "";
        todoList.append(newTodo);
    }
})


// done and remove 
// adding event listener to tbody -- an example for event delegation

todoList.addEventListener("click", (e) => {
    // console.log(e.target); // return the element where the event was seen/captured
    if (e.target.classList.contains("btn-done")) {
        const todoNode = e.target.parentNode.previousElementSibling;
        todoNode.style.textDecorationLine = "line-through";
    }
    if (e.target.classList.contains("btn-remove")) {
        const parentNodeOfTodo = e.target.parentNode.parentNode;
        parentNodeOfTodo.remove();

        if (!document.querySelector(".todo-list tr")) {
            table.style.display = "none";
            const todoEmptyMsg = myCreateElementText("h2", "Your To-do list is Empty!🐌");
            todoEmptyMsg.classList.add("to-center");
            container.append(todoEmptyMsg);
        }
    }
})





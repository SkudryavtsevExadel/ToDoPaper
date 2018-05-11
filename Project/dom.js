function addTodoItemDom(todoItem){
	if(addTodoItem(todoItem)){	
		document.getElementById("todo-items").appendChild(createTodoList(todoItem));
	}
}

function clearUI(){
    const container = document.getElementById("todo-items");
    const items = container.querySelectorAll('.todo');
    [].forEach.call(items, (item)=>{
        container.removeChild(item);
    });
}

function viewTodoListDom(itemsType) {
	clearUI();
    const container = document.getElementById("todo-items");
    let todoList = viewTodoList(itemsType);
    todoList
        .map((item) => createTodoList(item))
        .forEach((todoItem) =>{
            container.appendChild(todoItem);
        });
}

function editTodoItemDom(addTodoItemId, newText) {
		if(editTodoItem(addTodoItemId, newText)) {
            document.getElementById('item-'+addTodoItemId).querySelector(".textToDo").innerHTML = newText;	
		}
		else {
			alert(`It is impossible to edit todoItem with ID = ${addTodoItemId}`);
		}
}

function deleteTodoItemDom(todoItemId){
		if(deleteTodoItem(todoItemId)){
            const item = document.querySelector(`#item-${todoItemId}`);
            item.parentNode.removeChild(item);
		}
		else{
			alert(`ToDoIem with id =${todoItemId} is absent!`);
		}
}

function createTodoList(todoItem){
	let row = document.createElement('tr');
    row.className="todo";
    row.id = 'item-' + todoItem.id;
	if (todoItem.completed===true){
		row.innerHTML = `
                <td><p>${todoItem.id}</p></td><td><p class = "textToDo"> ${todoItem.text}</p></td><td><input type = "checkbox" checked></td>
        `;
	}
	else{
		row.innerHTML = `
                <td><p>${todoItem.id}</p></td><td><p class = "textToDo"> ${todoItem.text}</p></td><td><input type = "checkbox" ></td>`;
	}
	return row;
} // sorry for nasty UI - don't have anough time for nice visualization of results


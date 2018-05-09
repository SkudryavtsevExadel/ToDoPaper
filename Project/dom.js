function addTodoItemDom(todoItem){
	if(addTodoItem(todoItem)){	
		document.getElementById("todo-items").appendChild(createTodoList(todoItem));
	}
}

function viewTodoListDom(itemsType) {
	document.getElementById("todo-items").innerHTML= "";
	if(viewTodoList(itemsType)){
		let todoList = viewTodoList(itemsType);
		for(let i =0; i < todoList.length; i++){
            document.getElementById("todo-items").appendChild(createTodoList(todoList[i]));
		}
	}
}

function editTodoItemDom(addTodoItemId, newText) {
		if(editTodoItem(addTodoItemId, newText)) {
            document.getElementById(addTodoItemId).getElementsByClassName("textToDo")[0].innerHTML = newText;	
		}
		else {
			alert(`It is impossible to edit todoItem with ID = ${addTodoItemId}`);
		}
}

function deleteTodoItemDom(todoItemId){
		if(deleteTodoItem(todoItemId)){
            $('#todoItemId').remove();
		}
		else{
			alert(`ToDoIem with id =${todoItemId} is absent!`);
		}
}

function createTodoList(todoItem){
	let array = document.createElement('array');
    array.className="todo";
    array.id = todoItem.id;
	let todoAtHtml;
	if (todoItem.completed===true){
		todoAtHtml = `
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Completed</th>
            </tr>
            <tr>
                <td><p>${todoItem.id}</p></td><td><p class = "textToDo"> ${todoItem.text}</p></td><td><input type = "checkbox" checked></td>
            </tr>
        </table>`;
	}
	else{
		todoAtHtml = `
<table border="1">
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Completed</th>
            </tr>
            <tr>
                <td><p>${todoItem.id}</p></td><td><p class = "textToDo"> ${todoItem.text}</p></td><td><input type = "checkbox" ></td>
            </tr>
        </table>
`;
	}
	array.innerHTML = todoAtHtml;
	return array;
} // sorry for nasty UI - don't have anough time for nice visualization of results


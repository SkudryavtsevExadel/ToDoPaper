/*
JS file for Index.jtml file of main project of the automation courses.
*/

//alert ('JS file is connected with Index.html file');

 let todoItems = [];
(function() {
		$.getJSON( "todos.json", (data) => {
			todoItems = data.data;
            //addTodoItem({id:4, completed:true, text:'1333'});
            //console.log(viewTodoList('not_completed'));
            //deleteTodoItem(2);
            //completeTodoItem(3);
            //editTodoItem(4, 'New text testing');
            console.log(todoItems)
		});
    //newEl.innerHTML = `<div class="text">${item.text}</div>`;
})();
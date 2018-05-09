/*
JS file for Index.jtml file of main project of the automation courses.
*/

 let todoItems = [];
(function() {
		$.getJSON( "todos.json", (data) => {
			todoItems = data.data;
            //console.log(viewTodoList('not_completed'));
            //deleteTodoItem(2);
            //completeTodoItem(3);
            //editTodoItem(4, 'New text testing');
			//completeTodoItem(1);
			//viewTodoListDom("all");
			//editTodoItemDom(2,"Changed");
            //editTodoItemDom(10,"Changed"); // Item is absnet. Deleting is impossibe
			//addTodoItemDom({id:2, completed:true, text:'1333'}); //Id is not unique. Adding new element is blocked. Error is present in console
            //addTodoItemDom({id:2, completed:true, text:'1333'});
			//deleteTodoItemDom(1);
            viewTodoListDom("all");
            //console.log(todoItems);
		});
})();
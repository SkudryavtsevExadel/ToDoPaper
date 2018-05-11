/*
JS file for Index.jtml file of main project of the automation courses.
*/

 let todoItems = [];
(function() {
		$.getJSON( "todos.json", (data) => {
			todoItems = data.data;
            viewTodoListDom();
            //console.log(viewTodoList('not_completed'));
            //deleteTodoItem(2);
            //completeTodoItem(3);
            //editTodoItem(4, 'New text testing');
            setTimeout(()=>{
                completeTodoItem(2);
                //viewTodoListDom("completed");
            }, 3000);;
			//viewTodoListDom("all");
			setTimeout(()=>{
                editTodoItemDom(2,"Changed");
            }, 5000);
            //editTodoItemDom(10,"Changed"); // Item is absnet. Deleting is impossibe
			//addTodoItemDom({id:2, completed:true, text:'1333'}); //Id is not unique. Adding new element is blocked. Error is present in console
            //addTodoItemDom({id:2, completed:true, text:'1333'});
            setTimeout(()=>{
                deleteTodoItemDom(6);
            }, 7000);
            //viewTodoListDom("all");
            //console.log(todoItems);
		});
})();
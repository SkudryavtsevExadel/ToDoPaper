(function() {		
    const addItemForm = document.getElementById('editBlock');
    const table = document.getElementById('todo-items');
    const filterForm = document.getElementById('formRadio');
    $.getJSON( "todos.json", (data) => {
			data.data.forEach(addTodoItem);
            update();
		});
    function update(){
        const formData = new FormData(filterForm);
        viewTodoListDom(formData.get('filterRadio'));
    }
    filterForm.addEventListener('click', (event)=>{
       if(event.target.tagName == 'INPUT')
            update();
    });
    table.addEventListener('click', (event)=>{
        if(event.target.tagName !== 'BUTTON' && event.target.tagName !== 'INPUT'){
            return;
        }
        const tableRow = event.target.closest('tr.todo');
        let todoId = tableRow.id;
        todoId = Number(todoId.substr(5));
        if(!isNaN(todoId)){
            if(event.target.classList.contains('cb')){
                completeTodoItem(todoId, event.target.checked);
                update();
            }
            if(event.target.classList.contains('delete')){
                deleteTodoItemDom(todoId);                  
            }
            if(event.target.classList.contains('edit')){
                const item = getTodoItem(todoId);
                if(item){
                    addItemForm.querySelector('[name="editId"]').value = todoId;
                    addItemForm.querySelector('[name="editField"]').value = item.text;
                }    
            }
        }
            
    });
    addItemForm.addEventListener('submit', (event)=>{
        const formData = new FormData(addItemForm);
        const editId = formData.get('editId');
        if(editId){
           editTodoItem(+editId, formData.get('editField'));
            update();
           }
        else{
            addTodoItemDom({
                text: formData.get('editField'),
                comleted: false
            });
        }   
        addItemForm.reset();
        event.stopPropagation();
        event.preventDefault();
    });
    addItemForm.addEventListener('reset', ()=>{
       addItemForm.querySelector('[name="editId"]').value = ""; 
    })
})();


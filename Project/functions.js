let todoItems = [];
function addTodoItem(todoItem){
    if(!todoItem){
        throw 'Item is empty';
        //return false;
    }
    
    if(!todoItem.text){
        throw 'Text field is empty';
    }
    
    if(!todoItem.id){
        todoItem.id = Math.max(0,...todoItems.map(item=>item.id + 1));
    }
        
    todoItems.push(todoItem);
    return todoItem;
}

function viewTodoList(itemsType = 'all'){
    return todoItems.filter((item) => {
        switch (itemsType){
            case 'completed': 
                return item.completed;
            case 'not_completed':
                return !item.completed;
            case 'all':
                return true;
        }
    });
}
                      
function editTodoItem(addTodoItemId, newText){
    
    if (!newText){
        return false;
    }
    const targetItem = todoItems.find((item) => (item.id === addTodoItemId));
    
    if (targetItem){
        targetItem.text = newText;
        return true;
    }    
    return false;
}

function deleteTodoItem(todoItemId){
    const index = todoItems.findIndex((item) => (item.id === todoItemId));
    if (index !== -1){
        todoItems.splice(index, 1);
        return true;
    }
    return false;
}

function completeTodoItem(todoItemId, completed=true){
    const targetItem = todoItems.find((item) => (item.id === todoItemId));
    if (targetItem !== null){
        targetItem.completed = completed;
        return true;
    }
    return false;
}

function getTodoItem(todoItemId){
    return todoItems.find((item) => (item.id === todoItemId));
}
function addTodoItem(todoItem){
    if(!todoItem){
        throw 'Item is empty';
        //return false;
    }
    
    if(todoItem.text === ''){
        throw 'Text field is empty';
    }
    
    if(!todoItem.text || typeof todoItem.completed !== 'boolean' || !todoItem.id){
        throw 'Not all fields are present';
    }
    
    const isNotUniqe = todoItems.some((item) => (item.id === todoItem.id));
    if (isNotUniqe) {
        console.error('Id is not unique');
        return false;
    }    
    todoItems.push(todoItem);
    return true;
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

function completeTodoItem(todoItemId){
    const targetItem = todoItems.find((item) => (item.id === todoItemId));
    if (targetItem !== null){
        targetItem.completed = true;
        return true;
    }
    return false;
}
function addTodoItem(todoItem){
    if(todoItem.text === ''){
        return 'Text field is empty';
    }
    
    if(!todoItem.text || !todoItem.completed || !todoItem.id){
        return 'Not all fields are present';
    }
    
    todoItems.forEach(function(item){
        if (item.id === todoItem.id){
            return 'Id is not unique';
        }            
    })
    
    todoItems.push(todoItem);
    return true;
}

function viewTodoList(itemsType){
    var arrayTodoList = [];
    todoItems.forEach(function(item){
        if (itemsType === 'completed'){
            if (itme.completed === true){
                //push localal array
                arrayTodoList.push(item);
            }
        }
        if (itemsType === 'not_completed'){
            if (itme.completed === false){
                //push localal array
                arrayTodoList.push(item);
            }
        }
        if (itemsType === 'all'){
            arrayTodoList.push(item);
        }
    });

    return arrayTodoList;
}
                      

function editTodoItem(addTodoItemId, newText){
    
    if (!newText){
        return false;
    }
    var targetItem = todoItems.find(function(item) {
        return item.id === addTodoItemId;
    });
    
    if (targetItem !== null){
        targetItem.text = newText;
        return true;
    }    
    return false;
}

function deleteTodoItem(todoItemId){
    var index = todoItems.findIndex(function(item) {
        return item.id === todoItemId;
    });
    if (index !== -1){
        todoItems.splice(index, 1);
        return true;
    }
    return false;
}

function completeTodoItem(todoItemId){
    var targetItem = todoItems.find(function(item) {
        return item.id === todoItemId;
    });
    if (targetItem !== null){
        targetItem.completed = true;
        return true;
    }
    return false;
}
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

function viewTodoList(itemsType)
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

    return arrayTodoList;
}

function editTodoItem(todoItemId, newText){
    
    return    
}

function deleteTodoItem(todoItemId){
    
    return
}

function completeTodoItem(todoItemId){
    
    return
}
let todoId = 0;
let todo;
export function ADD_TODO(todoPara){
	        todo = {};
            todoId++;
            todo = {"id":todoId,"text":todoPara,"completed":false};
            return { type:'ADD_TODO' , todo};

}

export function DELETE_TODO(todo){
        
             return { type: 'DELETE_TODO' ,todo };

}
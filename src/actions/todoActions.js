let todoId = 0;
let todo;
export function ADD_TODO(todoPara){
	        todo = {};
            todoId++;
            todo = {"id":todoId,"text":todoPara,"completed":false};
            return { type:'ADD_TODO' , todo};

}

export function DELETE_TODO(todo){
       // console.log("DELETE_TODO called",todo);
             return { type: 'DELETE_TODO' ,todo };

}


export function TOGGLE_TODO(todo){
             //console.log("TOGGLE_TODO called",todo);
             return { type: 'TOGGLE_TODO' ,todo };

}
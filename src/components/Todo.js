import React from 'react';
import { connect } from 'react-redux';
import { DELETE_TODO } from '../actions/todoActions';


function Todo({dispatch,todos}){
//console.log(todos);
              return(
 
              	<ul className="list-group">
                 {todos.map((todo,key) => 

                  <li key={key} className="list-group-item" id={todo.id} >
                   {todo.text} 
                  <span className="badge">
                  <a onClick={
                    () => {
                      DELETE_TODO_HANDLER(dispatch,todo);
                    }
                  } className="delete_btn" href="javascript:void(0);">X</a>
                  </span>
                  </li>

                 )}
                  
			    </ul>

              	);

}
function getStyle(todo){
  console.log(todo);
  if(todo.completed){
    return {"text-decoration": "line-through"};
  }
}
function DELETE_TODO_HANDLER(dispatch,todo){
	dispatch(DELETE_TODO(todo));
}
export default connect()(Todo);
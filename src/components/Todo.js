import React from 'react';
import { connect } from 'react-redux';
import { DELETE_TODO , TOGGLE_TODO} from '../actions/todoActions';


function Todo({dispatch,todos}){
//console.log(todos);
              return(
 
              	<ul className="list-group">
                 {todos.map((todo,key) => 

                  <li key={key} className="list-group-item animated slideInLeft"  onClick={
                    () => {
                      TOGGLE_TODO_HANDLER(dispatch,todo);
                    }
                  } >
                   {todo.text} 

                  <span className="badge delete_badge">
                  <a onClick={
                    () => {
                      DELETE_TODO_HANDLER(dispatch,todo);
                    }
                  } className="delete_btn" href="javascript:void(0);">X</a>
                  </span>
                  {(todo.completed) ? <span className="badge list_badge_completed">Completed</span> : <span className="badge list_badge_pending">Active</span>}
                  </li>

                 )}
                  
			    </ul>

              	);

}

function TOGGLE_TODO_HANDLER(dispatch,todo){
	dispatch(TOGGLE_TODO(todo));
}
function DELETE_TODO_HANDLER(dispatch,todo){
  dispatch(TOGGLE_TODO(todo));
}
export default connect()(Todo);
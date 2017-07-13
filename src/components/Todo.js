import React from 'react';
import { connect } from 'react-redux';
import { DELETE_TODO } from '../actions/todoActions';


function Todo({dispatch}){

              return(
 
              	<ul className="list-group">
                  <li className="list-group-item">New <span className="badge">
                  <a onClick={
                  	() => {
                      DELETE_TODO_HANDLER(dispatch);
                  	}
                  } className="delete_btn" href="javascript:void(0);">X</a></span></li>
			    </ul>

              	);

}
function DELETE_TODO_HANDLER(dispatch){
	dispatch(DELETE_TODO());
}
export default connect()(Todo);
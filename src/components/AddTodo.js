import React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO }  from '../actions/todoActions';

 function AddTodo({dispatch}){
  let todoinput;

          return(
              
              <form onSubmit={
              	 (e) => {

                	e.preventDefault();
                       if(!todoinput.value.trim()){
                        return false;
                       }
                    dispatch(ADD_TODO(todoinput.value)); 
                    
                   }}>
                 
			<div className="form-group">

			 <label>Add new todo</label>

			 <input type="text" ref={node => {todoinput = node}} className="form-control" id="todo" placeholder="Add New Todo" name="todo"></input>
			  </div>
			  <button type="submit" className="btn btn-link btn-block btn-default">ADD TODO</button>
			 </form>
 
          	);


}






export default connect()(AddTodo);
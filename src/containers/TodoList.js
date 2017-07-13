import React, { Component } from 'react';
import TodoLists from '../components/TodoLists'

class TodoList extends Component{

			render(){

				return(
                       <div className="TodoLists_top_margin">
						<TodoLists />
 					   </div>
					);

			}


}


export default TodoList;
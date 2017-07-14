import React from 'react';
import Todo from '../components/Todo';
import {connect} from 'react-redux';
function getVisibleTodos(state){

         switch(state.visibilityfilter){
               case 'SHOW_ALL' :
                 //console.log("called in custome SHOW_ALL");
                 return state.todos;

                case 'SHOW_ACTIVE':
                 //console.log("called in custome SHOW_ACTIVE");  
                 return state.todos.filter(todo => (todo.completed != true) ? todo :'');
                
                case 'SHOW_COMPLETED':  
                   //console.log("called in custome SHOW_COMPLETED");
                   return state.todos.filter(todo => (todo.completed == true) ? todo :'');
                   
                default :    
                     return state.todos
         }
}

 function TodoLists({todos}){
 	         
           return(


             <div className="TodoLists_top_margin">
               <Todo todos={todos}/>
             </div>


              	);

}
function mapStateToProps(state){
	  return {"todos":getVisibleTodos(state)}
}
export default connect(mapStateToProps)(TodoLists);
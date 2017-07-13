import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
 

 function TodoLists({todos}){
 	         
           return(


             
               <Todo todos={todos}/>
             


              	);

}
function mapStateToProps(state){
	  return {"todos":state.todos}
}
export default connect(mapStateToProps)(TodoLists);
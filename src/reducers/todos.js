
import initialstate from './state';

export default function todos(state = initialstate.todos,action){
             
             switch(action.type){
                
		             	case 'ADD_TODO' :
		             	   // console.log("ADD_TODO in reducer",action);
		             	 	return [...state,action.todo];

		             	case 'DELETE_TODO' :
		             	   // console.log("DELETE_TODO in reducer");
		             	   return state.filter(todo => todo.id != action.todo.id);
		             	 

		             	 case 'TOGGLE_TODO' :
		             	   // console.log("DELETE_TODO in reducer");
		             	       return state.map(todo => 
							        (todo.id === action.todo.id) 
							          ? {...todo, completed: !todo.completed}
							          : todo
		             	    );   

		             	default :
		             	    return state;

             
             }

}
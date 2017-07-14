import initialstate from './state';


export default function visibilityfilter(state = initialstate.activefilter,action){

                     switch(action.type){
                        
		                        case 'SHOW_ALL' :
		                           //console.log('SHOW_ALL in reducer');
		                           return action.type;
		                           

		                        case 'SHOW_ACTIVE' :
 									//console.log('SHOW_ACTIVE in reducer');
		                        	return action.type
		                            

		                        case 'SHOW_COMPLETED' :
		                        	//console.log('SHOW_COMPLETED in reducer');
		                         	return action.type
		                            

		                        default :
                                    //console.log(state);
		                        	return state;

                     }

}
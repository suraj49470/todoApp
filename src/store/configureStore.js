import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';



export default function configureStore(){
	return createStore(rootReducer,compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f));
}


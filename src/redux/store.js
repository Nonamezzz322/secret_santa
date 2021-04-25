import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducter';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

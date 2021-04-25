import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';
import { boxReducer } from './boxReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  boxes: boxReducer
});
export default rootReducer;

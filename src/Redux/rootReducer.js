import { combineReducers } from 'redux';
import Menu from './reducers/Menu';
import User from './reducers/User';

const rootReducer = combineReducers({
  Menu: Menu,
  User: User,
});

export default rootReducer;

import{combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
  messagesPages: messagesReducer,
  profilePages: profileReducer,
  sidebar: sidebarReducer
})

let store = createStore(reducers, applyMiddleware(logger));

export default store;

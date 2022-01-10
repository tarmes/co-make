import { combineReducers } from 'redux';
import { issuesReducer as issuesState } from './issuesReducer';
import { userReducer as userState } from './userReducer';

export const rootReducer = combineReducers({
   issuesState,
   userState
})
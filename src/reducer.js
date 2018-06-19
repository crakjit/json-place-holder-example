import { combineReducers } from 'redux';
import postList from './pages/post/reducer';

export const appReducer = combineReducers({
    postList
});

export default appReducer;
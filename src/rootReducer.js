import { combineReducers } from 'redux';
import { likesReducer } from './components/redux/comment/reducer';
const rootReducer = combineReducers({
    likes:likesReducer,
    likesReducer
})
export default rootReducer;
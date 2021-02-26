
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reduxThunkReducer from './PostReducer'
export default combineReducers({
    reduxThunkReducer,
    // selectedCourseReducer,
    // authorReducer,
    // apiReducer,
    form: formReducer    
});

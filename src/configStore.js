import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';



const configStore = initialState => {
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};



export default configStore;
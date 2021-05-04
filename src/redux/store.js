import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    phonebook: {
        contacts: [],
        filter: '',
    }
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;


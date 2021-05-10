import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';


const contacts = createReducer([], {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => state.filter(({ name }) =>
        name !== payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
    contacts,
    filter
});


// ----------------------------------------------------------------------------

// const contacts = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(({ name }) => name !== payload);
        
//         default:
//             return state;
//     };
// };

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case actions.changeFilter:
//             return payload;

       
//         default:
//             return state;
//     }
// };
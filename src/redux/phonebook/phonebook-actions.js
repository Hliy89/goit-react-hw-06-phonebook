import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';


const addContact = createAction('phonebooks/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

const deleteContact = createAction('phonebooks/delete');

const changeFilter = createAction('phonebooks/changeFilter');


export default { addContact, deleteContact, changeFilter };


// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     }
// });


// const deleteContact = name => ({
//     type: types.DELETE,
//     payload: name,
// });





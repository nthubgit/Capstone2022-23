import uuid from 'uuid';

//component calls action gneerator
//action generator returns object
//component dispatches object
//redux store changes

//component calls action gneerator
//action generator returns object
//component dispatches function?
//function runs (can dispatch other actions)

//add_account
export const addAccount = (user) => ({
    type: 'ADD_ACCOUNT',
    user
})
//edit_account
export const editAccount = (id, updates) => ({
    type: 'EDIT_ACCOUNT',
    id,
    updates
});
//remove_account
export const removeAccount = ({ id } = {}) => ({
    type: 'REMOVE_ACCOUNT',
    id
})

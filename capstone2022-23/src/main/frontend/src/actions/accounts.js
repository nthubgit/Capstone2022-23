import uuid from 'uuid';
import axios from 'axios';

//component calls action gneerator
//action generator returns object
//component dispatches object
//redux store changes

//component calls action gneerator
//action generator returns object
//component dispatches function?
//function runs (can dispatch other actions)

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_ALL_ACCOUNTS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

//add_account
export const addAccount = (account) => ({
    type: 'ADD_ACCOUNT',
    account
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

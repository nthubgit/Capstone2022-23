//Accounts Reducer

const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_ALL_ACCOUNTS':
            return {
                ...state,
                account:action.payload
            }
        case 'ADD_ACCOUNT':
            return [...state, action.account];
        case 'REMOVE_ACCOUNT':
            return state.filter(({ id }) => id !== action.id); //tbd learn more about filter
        case 'EDIT_ACCOUNT':
            return state.map((account) => {
                if (account.id === action.id){
                    return {
                        ...account,
                        ...action.updates
                    }
                }
                else {
                    return account;
                }
            })
        default:
            return state;
    }
};
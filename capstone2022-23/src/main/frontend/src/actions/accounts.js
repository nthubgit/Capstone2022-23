import {
    CREATE_ACCOUNT,
    RETRIEVE_ACCOUNTS,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT,
    DELETE_ALL_ACCOUNTS
  } from "./types";

  import accountService from "../services/account.service";

  export const retrieveAccounts = () => async (dispatch) => {
    try {
      const res = await accountService.getAll();
  
      dispatch({
        type: RETRIEVE_ACCOUNTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
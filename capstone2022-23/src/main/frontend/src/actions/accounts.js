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

  export const createAccount = (firstName, lastName, dob, email) => async (dispatch) => {
    try {
      const res = await accountService.create({ firstName, lastName, dob, email });
  
      dispatch({
        type: CREATE_ACCOUNT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const updateAccount = (id, data) => async (dispatch) => {
    try {
      const res = await accountService.update(id, data);
  
      dispatch({
        type: CREATE_ACCOUNT,
        payload: res.data
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteAccount = (id) => async (dispatch) => {
    try {
      await accountService.delete(id);
  
      dispatch({
        type: DELETE_ACCOUNT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
import React from "react";
import { connect } from "react-redux";

export const UserList = (props) => (
  <div>
    {props.accounts.length === 0 ? (
        <p>No expenses</p>
    ) : (
        props.accounts.map((account) => {
        return <UserListItem key={account.id} {...account} />;
        })
    )}
    {}
  </div>
);

const mapStateToProps = (state) => {
    return {
        accounts: selectAccounts(state.accounts, state.filters),
      };
};

export default connect(mapStateToProps)(UserList);

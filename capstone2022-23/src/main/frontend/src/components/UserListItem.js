import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ id, lastName, firstName, email, imgPath }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{email}</h3>
    </Link>
        <p>{lastName}, {firstName}</p>
        <p>{imgPath}</p>
    </div>
);

export default UserListItem;
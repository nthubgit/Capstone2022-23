import React from 'react';
import { Link } from 'react-router-dom';

const ShopListItem = ({ dispatch, id, title, description, price, createdAt }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
    </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ShopListItem;
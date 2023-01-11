import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const CartListItem = ({ dispatch, id, title, price, quantity, discountedPrice, discountPercentage }) => ( 

            <TableRow key={id}>
              <TableCell>{title}</TableCell>
              <TableCell align="right">{quantity}</TableCell>
              <TableCell align="right">${price}</TableCell>
              <TableCell align="right">{discountPercentage}%</TableCell>
              <TableCell align="right">${discountedPrice}</TableCell>
            </TableRow>


  );

  export default CartListItem;
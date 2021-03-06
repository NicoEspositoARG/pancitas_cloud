import React from 'react';
import './Order.css';

import Header from './Header';
import ItemsTable from './ItemsTable';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const Order = () => {
    const classes = useStyles();

    return (
        <div className="order">
            <h2>Pedidos</h2>
            <form className={classes.root} noValidate autoComplete="off">
            <Header />
            
            <ItemsTable/>
            </form>
        </div>

            
    )

}

export default Order;
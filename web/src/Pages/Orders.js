import React, { Component } from 'react'
import Order from './Order'
import { connect } from 'react-redux'
import addOrder from '../actions/orderActions'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 700,
        marginTop: 40,
        borderRadius: 10
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    text: {
        textDecoration: 'none',
    },
    Typography: {
        textDecoration: 'none'
    },
}));


const Orders = (props) => {
    const classes = useStyles();
    const orders = props.orders;//geting the orders that login user has place
    let { profile } = props.users;//geting the login  user details
    console.log(orders)

    const orderList = orders && profile.id ? orders.map(order => { // first checking the orders are available and user available and then passing order geting the oreders list
        const arrayDate = order.date.split("-");
        const date = arrayDate[0] + "-" + arrayDate[1] + "-" + arrayDate[2].slice(0, 2); //arranging the date in proper way
        return (
           
            <div className={classes.root} key={order._id}>
                <Paper className={classes.paper}>
                    <Link to={'/order/' + order._id} textDecoration='none' >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={order.item[0].imgUrl} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" className={classes.text}>
                                            Order Date:<p>{date}</p><br />
                                        </Typography>
                                        <Typography variant="body2" gutterBottom className={classes.text}>
                                            shipping Address:{profile.address}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.text}>
                                            status:{order.status}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">Total Amount:{order.TotalAmount}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>
                </Paper>
            </div>
        )
    }) : (<div>no Orders to display</div>)

    return (
        <div>
            {profile.id ? {orderList}:(window.location.href = "/")} 
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
        users: state.users
    }
}
export default connect(mapStateToProps, null)(Orders)


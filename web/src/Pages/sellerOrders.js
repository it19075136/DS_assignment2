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


const SellerOrders = (props) => {
    const classes = useStyles();
    const allOrders = props.allOrders;
    let { profile } = props.users;
    // console.log(allOrders)
    // const orderLists = orders && profile.id ? orders.map(order => {order.item.map(item=>{
    //     item.sellerId == profile.id ? return(<div>

    //     </div>):(<div></div>)
    // }) }):(<div></div>)
    
    const itemlist = allOrders.map(order=>{
        // console.log(order)
       order.item.map(item=>{
        console.log(profile.id,item.sellerId)
        // console.log(item)
           return (<div>
               {/* {item.sellerId == profile.id ?( */}
               <div>
                <Paper className={classes.paper}>
                    {/* <Link to={'/order/' + order._id} textDecoration='none' > */}
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={item.imgUrl} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                                           item Name:<p>{item.itemName}</p><br />
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" className={classes.text}>
                                           quantity:<p>{item.qty}</p><br />
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" className={classes.text}>
                                            Order Date:<p>{order.date}</p><br />
                                        </Typography>
                                        <Typography variant="body2" gutterBottom className={classes.text}>
                                            shipping Address:{order.address}
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
                    {/* </Link> */}
                </Paper>
               </div>
               {/* ):(<div></div>)} */}
           </div>)
       })
    }
    )
    // :(<div></div>)

    // const itemList = cartItems.map(cartItem => { return { itemId: cartItem.product, itemName: cartItem.name, itemcolor: '', qty: Number(cartItem.qty), amount: cartItem.price, imgUrl: cartItem.imageUrl,sellerId:cartItem.sellerId } });


    // const orderList = orders && profile.id ? orders.map(order => {
    //     const arrayDate = order.date.split("-")
    //     const date = arrayDate[0] + "-" + arrayDate[1] + "-" + arrayDate[2].slice(0, 2);
    //     return (
    //         <div className={classes.root} key={order._id}>
    //             <Paper className={classes.paper}>
    //                 <Link to={'/order/' + order._id} textDecoration='none' >
    //                     <Grid container spacing={2}>
    //                         <Grid item>
    //                             <ButtonBase className={classes.image}>
    //                                 <img className={classes.img} alt="complex" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
    //                             </ButtonBase>
    //                         </Grid>
    //                         <Grid item xs={12} sm container>
    //                             <Grid item xs container direction="column" spacing={2}>
    //                                 <Grid item xs>
    //                                     <Typography gutterBottom variant="subtitle1" className={classes.text}>
    //                                         Order Date:<p>{date}</p><br />
    //                                     </Typography>
    //                                     <Typography variant="body2" gutterBottom className={classes.text}>
    //                                         shipping Address:{profile.address}
    //                                     </Typography>
    //                                     <Typography variant="body2" color="textSecondary" className={classes.text}>
    //                                         status:{order.status}
    //                                     </Typography>
    //                                 </Grid>
    //                             </Grid>
    //                             <Grid item>
    //                                 <Typography variant="subtitle1">Total Amount:{order.TotalAmount}</Typography>
    //                             </Grid>
    //                         </Grid>
    //                     </Grid>
    //                 </Link>
    //             </Paper>
    //         </div>
    //     )
    // }) : (<div>no Orders to display</div>)
console.log(itemlist)
    return (
        <div>
            {itemlist}
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        allOrders: state.orders.allOrders,
        users: state.users
    }
}
export default connect(mapStateToProps, null)(SellerOrders)


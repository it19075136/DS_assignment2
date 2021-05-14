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
        marginTop:40,
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
      text:{
        textDecoration:'none',
      },
      Typography:{
            textDecoration:'none'
        },
    }));
  
    // root: {
    //   flexGrow: 1,
    // },
    // paper: {
    //   padding: theme.spacing(2),
    //   margin: 'auto',
    //   maxWidth: 750,
    //   marginTop:40,
    // //   border: '5px solid #171717'
    // borderRadius: 10
    // },
    // image: {
    //   width: 128,
    //   height: 128,
    //   flex:'spacebetween'
    // },
    // img:{
    //   margin: 'auto',
    //   display: 'block',
    //   maxWidth: '100%',
    //   maxHeight: '100%',
    // },
    // Typography:{
    //     textDecoration:'none'
    // },
    // text:{
    //     marginLeft:'10px',
    //     position:'relative',
    //     textDecoration:'none'
    // }
    // box:{
    //     border: '2px  #000',
    //     position:'relative',
    //     overflow:'hidden',
    //     margin:'10px auto',
    //     '&:hover .content':{
    //              left:0
    //     }

    // },
    // content:{
    //    color:'#fff',
    //    background:'rgba(0,0,0,0.8)',
    //    position:'absolute',
    //    top:0,
    //    left:'-100%',
    //    width:'100%',
    //    height:'100%',
    //    padding:'20px',
    //    boxSizing:'border-box',
    //    transition:'all 0.5s',
    // },
//     'box:hover content':{
//         left:0
// }
    // box:hover content:{
       
    // }



//   }));

  const Orders = (props) => {
        const classes = useStyles();
        // const userId = this.
        const orders= props.orders;
        console.log(orders)
        const orderList= orders.map(order=>{
            return (  
        <div className={classes.root}  key={order.orderId}>
        <Paper className={classes.paper}>
            <Link to={'/order/'+order.orderId} >
            <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                    Order Date:<p>{order.date}</p><br/>
                    </Typography>
                    <Typography variant="body2" gutterBottom className={classes.text}>
                    shipping Address:{order.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.text}>
                    OrderNumber:{order.orderId}
                    </Typography>
                </Grid>
                {/* <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                    </Typography>
                </Grid> */}
                </Grid>
                <Grid item>
                <Typography variant="subtitle1">{order.TotalAmount}</Typography>
                </Grid>
            </Grid>
            </Grid>
            </Link>
        </Paper>
        </div>
            )
        })
        return(
                 <div>
                    {orderList}
                </div>
        )
        
   
}
const mapStateToProps =(state)=>{
    return{
        orders:state.orders.orders
    }
}
export default connect(mapStateToProps,null)(Orders)
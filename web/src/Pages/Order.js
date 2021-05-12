import React, { Component } from 'react'
import SelectedProduct from './SelectedProduct'
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
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
  }));

const Order = (props) => { 
    const classes = useStyles();
    const {order_ID} = useParams();
    const orders=props.orders;
    // const data = datacopy ? (datacopy.filter(data => data.orderNo == orderNo)) : datacopy

    const order = orders.map(order ? (order.filter(order=> order.order_ID == order_ID)):null)
    const items = order.item.map(item=>{
        return (

            <div className={classes.root} key={order.orderId}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={item.imgUrl} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                    item Name:{item.itemName}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Qunatity:{item.qty}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    item color: {item.itemcolor}
                    </Typography>
                </Grid>
                {/* <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                    </Typography>
                </Grid> */}
                </Grid>
                <Grid item>
                <Typography variant="subtitle1">{item.amount}</Typography>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
        </div>
        )
    })
        return (
            <div>
                {items}
            </div>
            
        )
}
const mapStateToProps=(state)=>{
    return{
        orders:state.orders.orders
    }
}
export default connect(mapStateToProps,null) (Order)
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

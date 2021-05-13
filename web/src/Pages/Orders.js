// import React, { Component } from 'react'
// import Order from './Order'
// import { connect } from 'react-redux'
// import addOrder from '../actions/orderActions'
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       margin: 'auto',
//       maxWidth: 500,
//     },
//     image: {
//       width: 128,
//       height: 128,
//     },
//     img: {
//       margin: 'auto',
//       display: 'block',
//       maxWidth: '100%',
//       maxHeight: '100%',
//     },
//   }));

//   class Orders extends Component {
   
    
//     render() {
//         const classes = useStyles();
//         // const userId = this.
//         const {orders}= this.props.orders;//problem
//         console.log(orders)
//         const orderList= orders.map(order=>{
//             return (
//                 <Link to={'/order/'+order.orderId} onClick={()=>this.handlesubmit()}>
//                     <div className={classes.root} key={order.orderId}>
//         <Paper className={classes.paper}>
//             <Grid container spacing={2}>
//             <Grid item>
//                 <ButtonBase className={classes.image}>
//                 <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//                 </ButtonBase>
//             </Grid>
//             <Grid item xs={12} sm container>
//                 <Grid item xs container direction="column" spacing={2}>
//                 <Grid item xs>
//                     <Typography gutterBottom variant="subtitle1">
//                     OrderNumber:{order.orderId}
//                     </Typography>
//                     <Typography variant="body2" gutterBottom>
//                     Order Date:{order.date}
//                     </Typography>
//                     {/* <Typography variant="body2" color="textSecondary">
//                     ID: 1030114
//                     </Typography> */}
//                 </Grid>
//                 {/* <Grid item>
//                     <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                     Remove
//                     </Typography>
//                 </Grid> */}
//                 </Grid>
//                 <Grid item>
//                 <Typography variant="subtitle1">{order.TotalAmount}</Typography>
//                 </Grid>
//             </Grid>
//             </Grid>
//         </Paper>
//         </div>
//         </Link>
//             )
//         })
//         return(
//                  <div>
//                     {orderList}
//                 </div>
//         )
        
//     }
// }
// const mapStateToProps =(state)=>{//problem
//     return{
//         orders:state.orders//problem
//     }
// }
// // const mapDispatchToProps =(dispatch)=>{//problem
// //     return{
// //         // createProject:(project)=>dispatch(createProject(project))
// //         addOrder:()=>dispatch(addOrder())//problem
// //     }
// // }
// export default connect(mapStateToProps,null)(Orders)

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

  const Orders = (props) => {
   
        const classes = useStyles();
        // const userId = this.
        const orders= props.orders;
        console.log(orders)
        const orderList= orders.map(order=>{
            return (
                <Link to={'/order/'+order.orderId} >
                    <div className={classes.root} key={order.orderId}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                    OrderNumber:{order.orderId}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Order Date:{order.date}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                    </Typography> */}
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
        </Paper>
        </div>
        </Link>
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
// const mapDispatchToProps =(dispatch)=>{//problem
//     return{
//         // createProject:(project)=>dispatch(createProject(project))
//         addOrder:()=>dispatch(addOrder())//problem
//     }
// }
export default connect(mapStateToProps,null)(Orders)
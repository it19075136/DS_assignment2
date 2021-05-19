import { useParams } from 'react-router'
import './HomePage.css'
import { connect } from 'react-redux'
import React, { Component, useState,useEffect } from 'react'
import {getProducts} from '../actions/productActions'
import SellerProduct from './sellerProduct'
import { Dialog, LinearProgress, Link } from '@material-ui/core'
import { Button } from 'bootstrap'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {addProduct,updateStateRed} from '../actions/sellerActions'; 
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(3),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
class sellerProducts extends Component {
    componentDidMount(){
        this.props.getProducts();
        console.log('componentdidmount')
    }
    
    render(){
    // const classes = useStyles();
    // const [count,setCount]=useState(0);
    // useEffect(()=>{
    //     getProducts();
    //     console.log('getproducts');
    // },[count==0])
    // setCount(count+1);
        // const {} = useParams();
        const user =  this.props.user;
        console.log(user)
        // const handleclick=()=>{
        //     // <Link to={'/form'} >
        //     //     </Link>
        // }
        // const [opens, setOpens] = React.useState(false);

//   const profile = props.user;

// console.log(user.id);
//   const [state, setState] = useState(
//     {
//         itemName:'',
//         description:'',
//         countInStock:0,
//         price:0,
//         date:'',
//         imageUrl:'',
//         sellerId:user.id,
//       }      );
//       const handlechange=(e)=>{
//         setState({
//             ...state,
//             [e.target.name]:e.target.value
//           })
//       }
//       const handlesubmit=(e)=>{
//         e.preventDefault();
//         console.log(state)
//         addProduct(state);
//       }

//         const handleClickOpen = () => {
//             setOpens(true);
//           };
//         const handleClose = () => {
//           setOpens(false);
//         };
        
    
        // componentDidMount(){
        //     axios.get('http://localhost:5000/api/delivery/')
        //     .then(response => {
        //         this.setState({ deliveries:response.data })
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })     
            
        // }
        const handleUpdateStateRed=()=>{
          updateStateRed();
        }
        const products =  this.props.products;
        console.log(products)
        const sellerProductsList = products ? (products.filter(product=>product.sellerId == user.id)): null
        console.log(sellerProductsList)
        const sellerProductArr = sellerProductsList.map(product=>{
            return(<SellerProduct product={product}/>)
            })
        console.log(sellerProductArr)
        return(
        <div className="homepage">
            {/* <Link to='/form' className="info__button" >Add a Product</Link> */}
            <a href='/form' className='info__button' onClick={handleUpdateStateRed}>Add a product</a>
            <div className="homepage__products">
               {sellerProductArr}
            </div>
           
            {/* <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleClickOpen}
        // startIcon={<AddIco />}
      >
        Add product
      </Button>
       */}
      {/* <Dialog
      style={{background: "transparent",overflowY: "hidden"}}
      open={opens}
      onClose={handleClose}
      >
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
      
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="itemName"
                variant="outlined"
                required
                fullWidth
                id="itemName"
                label="Item Name"
                autoFocus
                onChange={handlechange}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="description"
                name="description"
                autoComplete="description"
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="countInStock"
                label="Count In Stock"
                type="number"
                id="countInStock"
                autoComplete="current-password"
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                id="price"
                autoComplete="current-password"
                onChange={handlechange}
              />
            </Grid>
           
          </Grid> */}
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlesubmit}
          >
            ADD
          </Button> */}
{/*           
        </form>
      </div>
      
    </Container> 
      </Dialog> */}
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return{
        products:state.products.products,
        user:state.users.profile,
    }
}

export default connect(mapStateToProps,{getProducts,addProduct,updateStateRed}) (sellerProducts)
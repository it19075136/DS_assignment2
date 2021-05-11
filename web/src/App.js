import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import userRegistration from './components/userRegistration'
import ProductPage from './Pages/ProductPage';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import Orders from './Pages/Orders'
import Navbar from './components/Navbar';
import Delivery from './Pages/DeliveryPage';
import EditDelivery from './Pages/EditDelivery';

const initstate = {}

const middleware = [thunk]

const store = createStore(rootReducer,initstate,compose(applyMiddleware(
  ...middleware)
));

function App() {
  return (
    <Provider store = {store}>
      
      <BrowserRouter>
       
        <Navbar/>
        <Route exact path="/user/registration" component={userRegistration} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/order" component={Orders}/>
        <Route exact path="/delivery" component={Delivery}/>
        <Route exact path="/delivery/edit" component={EditDelivery}/>



      </BrowserRouter>
    </Provider>
  );
}

export default App;

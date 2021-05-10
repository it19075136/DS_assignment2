import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {useState} from 'react';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import userRegistration from './components/userRegistration'
import ProductPage from './Pages/ProductPage';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

const initstate = {}

const middleware = [thunk]

const store = createStore(rootReducer,initstate,compose(applyMiddleware(
  ...middleware)
));

function App() {

  const[sideToggle, setSideToggle] = useState(false);

  return (
    <Provider store = {store}>
      
      <BrowserRouter>
       
        <Navbar click={() => setSideToggle(true)}/>
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
        <Backdrop   show={sideToggle} click={() => setSideToggle(false)}/>
        <Route exact path="/user/registration" component={userRegistration} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />

      </BrowserRouter>
    </Provider>
  );
}

export default App;

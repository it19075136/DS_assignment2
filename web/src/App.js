import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import userRegistration from './components/userRegistration'

const initstate = {}

const middleware = [thunk]

const store = createStore(rootReducer,initstate,compose(applyMiddleware(
  ...middleware)
));

function App() {
  return (
    <Provider store = {store} >
      <BrowserRouter>
    <Route exact path="/user/registration" component={userRegistration} />
    </BrowserRouter>
    </Provider>
  );
}

export default App;

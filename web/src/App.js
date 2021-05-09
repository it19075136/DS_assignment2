import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const initstate = {}

const middleware = [thunk]

const store = createStore(rootReducer,initstate,applyMiddleware({
  ...middleware
}))

function App() {
  return (
    <Provider store = {store} >
    <div className="App">
      <header className="App-header">
        <h1>Hi People</h1>
      </header>
    </div>
    </Provider>
  );
}

export default App;

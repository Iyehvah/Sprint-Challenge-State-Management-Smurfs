import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import SmurfList from './components/SmurfList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return(
        <div>
            <SmurfList />
        </div>
    );
};

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));

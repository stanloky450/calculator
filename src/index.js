import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App.js';
    // const store = createStore(reducers, compose(applyMiddleware(thunk)))
    const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
     
        );


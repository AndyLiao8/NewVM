import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Home from './view/customModule/container';


const container = document.getElementById('app');
export default (store) => {
    ReactDOM.render((
        <Provider store={store} >
            <Home />
        </Provider>
    ), container);
};

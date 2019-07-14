import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import App from './container/App';


const container = document.getElementById('app');
export default (store) => {
    ReactDOM.render((
        <Provider store={store} >
            <App />
        </Provider>
    ), container);
};

import React from 'react';
import {render} from 'react-dom';
import configStore from './configStore';
import {Provider} from 'react-redux';
import App from './components/App';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';

const store = configStore();



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

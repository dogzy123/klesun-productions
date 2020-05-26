import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';

window.__klesun_productions_init__ = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('klesun-productions-root')
    )
};
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './STORE.js';

ReactDOM.render(<App objectProp={STORE}/>, document.getElementById('root'));
// WebPack Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); 
/*
ReactDOM.render(<App headerTitle = "Welcome!"
                     contentTitle = "Stranger, "
                     contentBody = "Welcome to example app"/>, rootElement);
*/

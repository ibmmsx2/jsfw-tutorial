// WebPack Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppImmute from './components/AppImmute';

const rootElement = document.getElementById('root');


// case1
//ReactDOM.render(<App headerTitle = "Welcome!" contentTitle = "Stranger, " contentBody = "Welcome to example app"/>, rootElement);

// case 2
//ReactDOM.render(<App />, rootElement); 

// case 3
ReactDOM.render(<AppImmute />, rootElement); 

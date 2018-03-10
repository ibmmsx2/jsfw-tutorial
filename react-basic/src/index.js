// WebPack Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppImmute from './components/AppImmute';
import AppRef from './components/AppRef';

const rootElement = document.getElementById('root');


// case 1 : prop, state 기초
//ReactDOM.render(<App headerTitle = "Welcome!" contentTitle = "Stranger, " contentBody = "Welcome to example app"/>, rootElement);

// case 2 : prop, state 응용
//ReactDOM.render(<App />, rootElement); 

// case 3 : state 업데이트를 위한 immutable 사용하기
//ReactDOM.render(<AppImmute />, rootElement); 

// case 4 : ref를 활용한 DOM 제어
ReactDOM.render(<AppRef />, rootElement); 

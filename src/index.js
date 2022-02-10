import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import '@styles/main.css'

const Loading = document.querySelector('.loadin-spinner');

ReactDOM.render(<App />, document.getElementById('root'))
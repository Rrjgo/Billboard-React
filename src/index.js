import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const axios = require('axios')

const endpoint = 'https://billboard-backend-hj.herokuapp.com'

axios.get(`${endpoint}/msg`)
  .then(data => {
    // handle success
    
    console.log(data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


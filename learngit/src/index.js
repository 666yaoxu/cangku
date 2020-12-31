import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
// import Admin from './pages/Admin'
import reportWebVitals from './reportWebVitals';
// import R1 from './pages/router-dmeo/router01/router01';
import R2 from './pages/router-dmeo/router02/router02'

ReactDOM.render(
  <React.StrictMode>
    {/* <Admin /> */}
   < R2></R2>
    {/* <R1/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

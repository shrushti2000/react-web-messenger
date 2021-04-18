import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDo3AUvuTOO2qsF3DP-1QnUzNbvYcbsKDs",
  authDomain: "web-messenger-c449a.firebaseapp.com",
  databaseURL: "https://web-messenger-c449a-default-rtdb.firebaseio.com",
  projectId: "web-messenger-c449a",
  storageBucket: "web-messenger-c449a.appspot.com",
  messagingSenderId: "1004224910555",
  appId: "1:1004224910555:web:eb90df1341b565eb9c68fe",
  measurementId: "G-PXY9T2X0F8"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

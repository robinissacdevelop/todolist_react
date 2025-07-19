// import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect } from 'react';
import form from './form.js';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#020024'; // Replace with your desired color code or name
  }, []);
  return (
    <form />

  );
}

export default App;

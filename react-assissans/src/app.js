import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div >
    <Navbar />
    <Main />
    </div>
  );
}

export default App;

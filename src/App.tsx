import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/styles/yukaju.css'
import MainComponent from './components/main';
import FooterComponent from './components/footer';
import NavBarComponent from './components/navbar';
import { BrowserRouter } from 'react-router-dom';



function App() {


  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBarComponent />
      <MainComponent />
      <FooterComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

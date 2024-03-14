import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Slide from './component/Slide';
import Products from './component/Products';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header/>
    <Slide/>
    <Products/>
    <Footer/>
    </>
  
  );
}

export default App;

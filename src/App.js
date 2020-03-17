import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Banner from './Components/Banner';
import Product from './Components/Product';
import NewProduct from './Components/NewProduct';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <Product />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Props from './components/props';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />}></Route>
        
      </Routes>
    </BrowserRouter>
    <div className='title'>
    <h1 className='text-center'>E-COMMERCE WEBSITE USING REACT JS</h1>
    </div>
    <div className='container'>
            <div className='row'>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="Shirt For Men"
                  img="image/net1.webp"
                  brand="Cotton Blend"
                  price="Rs:2000"
                  btn="Buy Now"
                />        
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="Trouser For Men"
                  img="image/net2.jpg"
                  brand="Polycotton"
                  price="Rs:2500"
                  btn="Buy Now"
                />        
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="Shoes For Men"
                  img="image/net3.jpg"
                  brand="Syntethic Leather"
                  price="Rs:2999"
                  btn="Buy Now"
                />      
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="Men Watches"
                  img="image/net4.jpg"
                  brand="Analog"
                  price="Rs:2000"
                  btn="Buy Now"
                />      
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="Custmized Wallet"
                  img="image/net5.jpg"
                  brand="Faux Leather"
                  price="Rs:1000"
                  btn="Buy Now"
                />         
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="1_Lc_brown"
                  img="image/net6.jpg"
                  brand="Leather"
                  price="Rs:2000"
                  btn="Buy Now"
                />         
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="SunGlasses"
                  img="image/net7.jpg"
                  brand="Metal Transparent"
                  price="Rs:2000"
                  btn="Buy Now"
                />         
               </div>
               <div className='col-12 col-md-3 m-0 p-0'>
               <Props 
                  name="Laptops Bags"
                  img="image/net8.jpg"
                  brand="Polyester"
                  price="Rs:2000"
                  btn="Buy Now"
                />         
               </div>
            </div>
          </div>
    </div>   
  );
}

export default App;

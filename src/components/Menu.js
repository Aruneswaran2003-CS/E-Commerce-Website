import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () =>{
    return(
        <>
          <div className='menu'>
            <nav>
            
                <ul>
                    <li><NavLink to="/" className="nav">Home</NavLink></li>
                    <li><NavLink to="/" className="nav">Shop</NavLink></li>
                    <li><NavLink to="/" className="nav">Our Products</NavLink></li>
                    <li><NavLink to="/" className="nav">Contact Us</NavLink></li>
                    <li><NavLink to="/" className="nav">About Us</NavLink></li>
                    <input type="text" name="name" placeholder="SearchProducts"></input>
                </ul>
            </nav>
          </div>
        </>  
    )
}
export default Menu;
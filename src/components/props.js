import React from 'react';

const Props = (props) =>{
    return(
        <div>
            <div className='container mt-5'>
              <div className='row'>
                <div className='col-12'>
                   <div className='card2'>
                       <img src={props.img} alt='...' height ='180px' width='100%'></img>
                       <h3>{props.name}</h3>
                       <span>{props.brand}</span>
                       <span>{props.price}</span>

                       <div className='btn_b'>
                           <a href='https://www.google.com/'>
                               <button>{props.btn}</button>
                           </a>
                       </div>
                   </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Props
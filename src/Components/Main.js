import React from 'react';
import coffeemug from './Images/coffeemug.jpg';
 

function Main ( ){
    return (
        <div className="Main">
        <img  className="mug" src= {coffeemug} alt="mug"/>
    <div  className='right'>
            <p className='green-bold'> Win a thousand Stars</p>
            <p className='para'>We’re giving away 1,000 Stars to 1,000 <br/> Starbucks® Rewards members in our  <br/>Million Stars
             Giveaway and much more all<br/> week!*</p>
             <button className='btn-1'> <a href='https://www.starbucksstardays.com' className='navbar-link'>Play to win</a> </button>
        </div>
    
        </div>
    
        
    )
        

    
}
export default Main

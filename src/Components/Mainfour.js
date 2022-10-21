import React from 'react';
import Coldcofee from './Images/coldcoffee.jpg'

function Mainfour() {
  return (
    <div className='similar'>
    <div className='paras'>
        <p className='para-1' > Layers of baked <br/>apple yum</p>
        <p className='para-2'>Try the Apple Crisp Oatmilk Macchiato, <br/>now nondairy and with Starbucks® Blonde <br/>Espresso.</p>
        <button className='btn-3'> <a href='https://www.starbucks.com/menu/featured' className='btn-link'>Learn more</a> </button>
        
    </div>
    <img className='mugs' src={Coldcofee} alt='cold'/>
    </div>
  )
}

export default Mainfour
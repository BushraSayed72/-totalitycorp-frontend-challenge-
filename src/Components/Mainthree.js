import React from 'react'
import Mugs from './Images/mugs.jpg'

function Mainthree() {
  return (
    <div className='similar'>
    <img  className='mugs' src={Mugs} alt=''/>
    <div className='paras'>
        <p className='para-1'>Perfectly<br/> pumpkin</p>
        <p className='para-2'>Savor the season with a Pumpkin Spice <br/> Latte or Pumpkin Cream Cold Brew.</p>
        <button className='btn-3'> <a href='https://www.starbucks.com/menu/featured' className='btn-link'>Order now</a> </button>
    </div>
      
    </div>
  )
}

export default Mainthree

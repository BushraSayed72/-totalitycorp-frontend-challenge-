import React from 'react';
import Delta from './Images/delta.webp';


function Maintwo() {
  return (
    <div className='main-two'>
        <div className='left-side'>
            <p className='heading'>A new way to earn sips and trips</p>
            <p className='secndpara'>Now you can link your Starbucks® 
            Rewards + Delta <br/>SkyMiles® accounts to get:</p>
            <ul className='ul-list'>
                <li className='space'>150 Stars + 500 miles when you link before 12/31</li>
                <li className='space'>Double Stars on Delta travel days</li>
                <li className='space'>1 mile per $1 spent at Starbucks (excludes taxes <br/>and gratuities)**</li>
            </ul>
            <button className='btn-2'> <a href='https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7002' className='btn2-link'>Link accounts</a> </button>
        </div>
        <img className='deltaimg' src={Delta} alt='delta'/>
    </div>
  )
}

export default Maintwo

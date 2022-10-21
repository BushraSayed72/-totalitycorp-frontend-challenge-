import React from 'react'
import {BsSpotify} from "react-icons/bs";
import {BsFacebook} from 'react-icons/bs';
import {BsPinterest} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsFillDisplayFill} from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'>
    <hr/><div className='footer-para'>
    <a className='icons' href='https://open.spotify.com/user/starbucks'><BsSpotify/></a>
    <a className='icons' href='https://www.facebook.com/Starbucks/'><BsFacebook/></a>
    <a className='icons' href='https://in.pinterest.com/starbucks/'><BsPinterest/></a>
    <a className='icons' href='https://www.instagram.com/starbucks/'><BsInstagram/></a>
    <a className='icons' href='https://www.youtube.com/starbucks'><BsYoutube/></a>
    <a className='icons' href='https://twitter.com/starbucks/'><BsTwitter/></a>
       </div>
    <div className='last'>
        <a className='footer-last' href='https://www.starbucks.com/terms/privacy-policy/'> Privacy Policy</a>
        <hr/>
        <a className='footer-last' href='https://www.starbucks.com/terms/starbucks-terms-of-use/'>Terms of Use</a>
        <hr/>
        <a className='footer-last' href='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf'>CA Supply Chain Act</a>
        <hr/>
        <a className='footer-last' href='#'>Cookies Prefrence</a>
        <hr/>
    </div>
    <div className='footer-end'>© 2022 Starbucks Coffee Company. All rights reserved.
    <div className='bushra'><BsFillDisplayFill/>    BUSHRA SAYED</div></div>

    </div>
  )
}

export default Footer
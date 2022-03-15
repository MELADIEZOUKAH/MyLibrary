import React from 'react'
import './Profial.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import DraftsIcon from '@material-ui/icons/Drafts';

function Profial() {
  return (
    <div className='foother'>
        <div className='desgin'> Desgin By : </div>
        <hr></hr>
        <a href=""><div className='myPro'>
            <img src="https://i.postimg.cc/rFjJxnkd/Free-Sample-By-Wix.jpg" alt="" className='logo_pro'/>
            <p className='my_name'>ميلاد مصباح عزوكه</p>
            <div>
                <a href=""><FacebookIcon/></a>
                <a href=""><TwitterIcon/></a> 
                <a href=""><TelegramIcon/></a> 
                <a href=""><DraftsIcon/></a>  
            </div>
                
        </div>
        </a>
    </div>
  )
}

export default Profial
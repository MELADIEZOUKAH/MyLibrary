import React from 'react'
import './Profial.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import DraftsIcon from '@material-ui/icons/Drafts';

function Profial() {
  return (
    <div className='information'>
    <div className='foother'>
        
        <hr></hr>
        <div className='myPro'>
            
             <div className='logo_myPro'>
             <a href="https://www.facebook.com/profile.php?id=100047661513631" target='_blank' style={{width:"0px",height:"0px",display:"flex"}}><img src="https://i.postimg.cc/rFjJxnkd/Free-Sample-By-Wix.jpg" alt=""  className='logo_pro'/></a>
             </div> 
             
             <p className='my_name'>ميلاد مصباح عزوكه</p>   
             
            <div className='media'>
                  <div className='logo_media'>
                  <a href="https://www.facebook.com/profile.php?id=100047661513631" className='href' target="_blank"> <FacebookIcon/></a>
                  </div>
                  <div className='logo_media'>
                  <a href="https://twitter.com/iezoukah" className='href' target="_blank"><TwitterIcon/></a>
                  </div> 
                  <div className='logo_media'>
                  <a href="" className='href' target="_blank"><TelegramIcon/> </a> 
                  </div>
                  <div className='logo_media'>
                  <a href="mailto:meladeizoukah@gmail.com" className='href' target="_blank"><DraftsIcon/></a>  
                </div>
                 
                  
            
                </div>    
        </div>
        
    </div>  
    </div>
    
  )
}

export default Profial
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
        <div className='desgin'> Desgin By : </div>
        <hr></hr>
        <div className='myPro'>
            
             <div style={{height:"70px",padding:"16px 0"}}>
             <a href="https://www.facebook.com/profile.php?id=100047661513631" target='_blank' style={{width:"0px",height:"0px"}}><img src="https://i.postimg.cc/rFjJxnkd/Free-Sample-By-Wix.jpg" alt=""  className='logo_pro'/></a>
             </div> 
             
             <p className='my_name'>ميلاد مصباح عزوكه</p> 
             
              
               
             
            <div className='media'>
            <a href="" className='href'><div className='logo_media'>
                  <FacebookIcon/>
                  </div></a>
                  <a href="" className='href'><div>
                  <TwitterIcon/>
                  </div></a> 
                  <a href="" className='href'><div className='logo_media'>
                  <TelegramIcon/>  
                  </div></a>
                  <a href="" className='href'><div className='logo_media'>
                  <DraftsIcon/>  
                </div></a>
                 
                  
            
                </div>    
        </div>
        
    </div>  
    </div>
    
  )
}

export default Profial
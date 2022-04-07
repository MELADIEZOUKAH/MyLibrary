import React from 'react';
import './Header.css'

function Header() {
  return (
      <div id='head'>
          
      
    <div className='header' style={{direction:"rtl"}}>
                <div className='header_right'>
                  <a href="https://kfe.elmergib.edu.ly" target="_blank"> <img src="https://i.postimg.cc/vB2HG7dj/logo.jpg" alt="gg" className='header_logo'/></a>
                  <a href="https://kfe.elmergib.edu.ly" target="_blank"> <h1 className='header_name'> مكتبة كلية الهندسة - جامعة المرقب </h1></a>
                </div>  
        <div className="dropdown" >
                    <p className="dropbtn"><button className='button'>أقسام الكلية</button></p>
                    <div className="dropdown-content">
                        <a href="/electrical_engineering">الهندسة الكهربائية</a> 
                        <a href="/mecanical_engineering">الهندسة الميكانيكية</a>
                        <a href="/architecture">الهندسة المعمارية</a>
                        <a href="/civil_ingineering">الهندسة المدنية</a>
                        <a href="/camical_ingineering"> الهندسة الكيميائية و النفطية</a>
                    </div>
                </div>
                       
    </div>
            <div className='info'>
                سنقدم لك في هذه المكتبة كل ما تحتاج اليه من كتب و مراجع علمية ستساعدك في فهم المواد الدراسية المختلفة
            </div>
    </div>
  )
}

export default Header
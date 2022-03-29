import React from 'react';
import './Header.css'

function Header() {
  return (
      <div id='head'>
          
      
    <div className='header' style={{direction:"rtl"}}>
                <div className='header_right'>
                  <a href="https://www.facebook.com/engineering.elmergib/" target="_blank"> <img src="https://scontent.fmji3-1.fna.fbcdn.net/v/t1.18169-9/425834_288816017855690_477423136_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=7G8uIZqqdx0AX8ybiaW&_nc_ht=scontent.fmji3-1.fna&oh=00_AT-mqEJFl59pc3NDlxE8-Jn9EufbSz6uLC7Lnz1fyGiAgA&oe=624A2A29" alt="gg" className='header_logo'/></a>
                  <a href="https://www.facebook.com/engineering.elmergib/" target="_blank"> <h1 className='header_name'> مكتبة كلية الهندسة - جامعة المرقب </h1></a>
                </div>  
        <div className="dropdown" >
                    <p className="dropbtn">أقسام الكلية</p>
                    <div className="dropdown-content">
                        <a href="/electrical_engineering">الهندسة الكهربائية</a> 
                        <a href="/mecanical_engineering">الهندسة الميكانيكية</a>
                        <a href="/architecture">الهندسة المعمارية</a>
                        <a href="/civil_ingineering">الهندسة المدنية</a>
                        <a href="/petroleum_engineering">الهندسة النفطية</a>
                        <a href="/camical_ingineering">الهندسة الكيميائية</a>
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
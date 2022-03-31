import React from 'react'
import './HeaderCollage.css'
import {Link} from 'react-router-dom';

function HeaderCollage() {
  return (
    <div className='headercollage'>
        <div className='header_xx'>
        <a href=""> <img src="https://scontent.fmji3-1.fna.fbcdn.net/v/t1.18169-9/425834_288816017855690_477423136_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=7G8uIZqqdx0AX8ybiaW&_nc_ht=scontent.fmji3-1.fna&oh=00_AT-mqEJFl59pc3NDlxE8-Jn9EufbSz6uLC7Lnz1fyGiAgA&oe=624A2A29" alt="" className='header_logoo'/></a>
        <a href=""> <h1 className='header_x'>كلية الهندسة - جامعة المرقب</h1></a>
        </div>

        <div className='department'>
            <Link to='/electrical_engineering' className='link' ><p id='link'>قسم الكهربائية</p></Link>  
            <Link to='/mecanical_engineering' className='link'><p>قسم الميكانيكية</p></Link>  
            <Link to='/architecture' className='link'><p>قسم المعمارية</p></Link>
            <Link to='/civil_ingineering' className='link'><p>قسم المدنية </p></Link> 
            <Link to='/camical_ingineering' className='link' ><p>قسم الكيميائية و النفطية </p></Link>  
            <Link to='/' className='link' id="ga"><p id='gneral'>القسم العام</p></Link>
         </div>
   </div>
  )
}

export default HeaderCollage
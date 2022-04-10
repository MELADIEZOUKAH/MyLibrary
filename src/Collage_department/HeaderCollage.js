import React from 'react'
import './HeaderCollage.css'
import {Link} from 'react-router-dom';

function HeaderCollage() {
  return (
    <div className='headercollage'>
        <div className='header_xx'>
        <a href=""> <img src="https://i.postimg.cc/vB2HG7dj/logo.jpg" alt="" className='header_logoo'/></a>
        <a href=""> <h1 className='header_x'>كلية الهندسة - الخمس</h1></a>
        </div>

        <div className='department'>
            <Link to='/electrical_engineering' className='link' ><p id='link'>قسم الكهربائية</p></Link>  
            <Link to='/mecanical_engineering' className='link'><p>قسم الميكانيكية</p></Link>  
            <Link to='/architecture' className='link'><p>قسم المعمارية</p></Link>
            <Link to='/civil_ingineering' className='link'><p>قسم المدنية </p></Link> 
            <Link to='/camical_ingineering' className='link' id="ga"><p>قسم الكيميائية و النفطية </p></Link>  
            <Link to='/' className='link' ><p id='gneral'>القسم العام</p></Link>
         </div>
   </div>
  )
}

export default HeaderCollage
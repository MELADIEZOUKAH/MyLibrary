import React from 'react'
import HeaderCollage from './HeaderCollage'
import Books_Electrical from '../books.json';

function Camical() {
  return (
    <div>
      <HeaderCollage/>
      <div style={{textAlign:"center", fontSize:"30px", height:"60px" , width:"100%" , lineHeight:"60px",fontWeight:"500"}}>
        قسم الكيميائية
      </div>

      <div className='books'>
      {Books_Electrical.filter(even => even.id > 300 && even.id < 400).map((book,index) =>{
        return (
          <div key={index} className="div_outside">
              <a href={book.url} className="list_url" target='_blank'>
                <div className='div_inside'>
                  <img src={book.img} alt="sorry"  className="list_img"/>
                  <p className='list_name'>{book.name}</p>
                  <p className='under_name'>{book.name_book}</p>
                </div>                 
              </a>
          </div>  )  
      })}
      </div>
    </div>
  )
}

export default Camical
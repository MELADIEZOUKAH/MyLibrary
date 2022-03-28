import React from 'react'
import HeaderCollage from './HeaderCollage'
import bookspdf from '../books.json'
import '../Books'

function Petroleum() {
  return (
    <div>
      <HeaderCollage/>
      <div style={{textAlign:"center", fontSize:"30px", height:"60px" , width:"100%" , lineHeight:"60px",fontWeight:"500"}}>
        قسم النفطية
      </div>

      <div className='books'>
      {bookspdf.filter(even => even.id > 500 && even.id <600).map(book => (
        
          <div  className="div_outside">
              <a href={book.url} className="list_url" target='_blank'>
                <div className='div_inside'>
                  <img src={book.img} alt="sorry"  className="list_img"/>
                  <p className='list_name'>{book.name}</p>
                  <p className='under_name'>{book.name_book}</p>
                </div>                 
              </a>
          </div>  ))
     }
     </div>
    </div>

  )
}

export default Petroleum
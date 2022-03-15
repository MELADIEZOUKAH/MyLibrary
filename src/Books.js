import React from 'react';
import books_pdf from './books.json';
import './Books.css';

function Books() {
  return (
    <div className='books'>
    {books_pdf.map((list,index)=>{
            return (
            <div key={index} className="div_outside">
                <a href={list.url} className="list_url" target='_blank'>
                  <div className='div_inside'>
                    <img src={list.img} alt="sorry"  className="list_img"/>
                    <p className='list_name'>{list.name}</p>
                    <p className='under_name'>{list.name_book}</p>
                  </div>                 
                </a>
            </div>  )   
        })} 
           
    </div>
   
    
  )
}

export default Books
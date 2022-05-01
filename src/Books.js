import React from 'react';
import books_pdf from './books.json';
import './Books.css';

function Books() {
  return (
    <div className='books'>
    {books_pdf.filter(booksss => booksss.id <100).map((list,index)=>{
            return (
            <div key={index} className="div_outside">
                <a href={list.url} className="list_url" target='_blank'>
                  <div className='div_inside'>
                    <img src={list.img} alt="sorry"  className="list_img"/>                                                          
                    <div className='all_name'>
                    <p className='list_name'>{list.name}</p>
                    <p className='under_name'>{list.name_book}</p>
                    </div>
                  </div>                 
                </a>
            </div>  )   
        })} 
    </div>
   
    
  )
}
export default Books
// قسم الكهربائية 100 - 200
//  قسم المدنية 200 - 300 
// قسم الكيميائية 300 - 400
// قسم الميكانيكية 400 - 500
// قسم المعمارية  600 - 700
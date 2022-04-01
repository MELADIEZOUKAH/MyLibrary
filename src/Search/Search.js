import React,{useState} from 'react';
import './search.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function Search({placeholder,data}) {
  const [filteredData,setfilteredData] = useState([])
  const [worldenter,setworldenter] = useState("")
  
  const callfilter = ((event)=> {
      const searchword = event.target.value;
      setworldenter(searchword);
      const newfilter = data.filter((value) =>   {
        return value.name.includes(searchword) || value.name_book.includes(searchword);
      });

      if(searchword === ""){
        setfilteredData([])
      }
      
      else{
        setfilteredData(newfilter)  
      }
  });
  const clearworld = () =>{
    setfilteredData([]);
    setworldenter("")
  }
  
  return (
    <div className='search'>
        <div className='searchInput'>
        <input type="text" placeholder={placeholder} value={worldenter} style={{paddingRight:'12px'}} onChange={callfilter}/>
        <div className='search_icon'>
          {filteredData.length === 0 ?(
            <SearchIcon/>
          ) : (
            <CloseIcon style={{cursor:'pointer'}} onClick={clearworld}/>
          )
          }
        </div>
     
        {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map((value,index)=>{
            return(
                <div className='box_result' key={index}>
                <a href={value.url} className='search_Reault' target='_blank'  >
                  <img src={value.img} className="img"/>
                  <div style={{paddingRight:'20px'}}>
                    <p className='p'>{value.name}</p>
                    <h5 style={{margin:'0',opacity:'0.5',color:"black"}}>{value.name_book}</h5>
                    
                  </div>
                  </a>
                </div>
            ) 
          })}
        </div>)}
        </div>
    </div>
  )
}

export default Search
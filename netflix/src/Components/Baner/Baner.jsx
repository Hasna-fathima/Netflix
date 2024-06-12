import React, { useEffect,useState } from 'react'
import './Baner.css'
import axios from '../Constans/Axios'
import { API_KEY, imageUrl } from '../Constans/Constants'


function Baner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[3])
    })

  },[])
  
  return (
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :"" })`}}
     className='baaner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_botton'>
                <button className='button'>play</button>
                <button className='button'>My list</button>
             </div>
             < h1 style={{paddingLeft:"15px"}} className='description'>{movie ? movie.overview :""}</h1>         
             <div className="fade_bottom"></div>
          </div>
    </div>
    
  )
}

export default Baner

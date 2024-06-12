import React,{useEffect,useState} from 'react'
import'./Rowpost.css';
import axios from '../Constans/Axios';
import { imageUrl} from '../Constans/Constants';


function Rowpost(props) {
  const[movies,setMovies]=useState([])
  const [urlid,setUrlId]=useState('')
  useEffect(()=>{
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
   }).catch(err=>{
    alert('Network Error')
   })
  },[])
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
           <img className={props.isSmall ? 'smallposter' :'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path }`}/>

      )}
        
      </div>   

  </div>
  )
      
        }


export default Rowpost

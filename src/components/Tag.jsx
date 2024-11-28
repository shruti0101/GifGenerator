import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {
    const [loading,setLoading]=useState(false); 
    const [gif,setGif]=useState('');
    const [tag,setTag]=useState('car')

    async function fetchData() {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

     const output= await axios.get(url)
     console.log(output);
        const gifSource=output.data.data.images.original.url;
        setGif(gifSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])

    function clickHandler(){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value)
    }
    


  return (
    <>
      <div className="w-1/2 bg-red-800 mt-[40px] mb-[40px] rounded-lg border border-black flex flex-col items-center gap-y-5">
        <h2 className="uppercase underline text-2xl text-center pt-2 ">
            
           random {tag} gifs
        </h2>

      {
        loading ? (<Spinner></Spinner>) : (    <img src={gif} width="350"></img>)
      }



<input type='text' className='' value={tag} onChange={changeHandler}></input>
    
        <button
        onClick={clickHandler}
         
          className="capitalize text-center w-9/12  bg-red-600 text-lg p-1 mb-5 rounded-lg"
        >
          generate
        </button>
      </div>
    </>
  )
}

export default Tag
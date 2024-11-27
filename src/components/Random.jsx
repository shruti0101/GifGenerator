import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading,setLoading] = useState(false)

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const output = await axios.get(url);

    const gifSource = output.data.data.images.original.url;
    setGif(gifSource);

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler(){
    fetchData();
  }



  return (
    <>
      <div className="w-1/2 bg-lime-700  rounded-lg border border-black flex flex-col items-center gap-y-5">
        <h2 className="uppercase underline text-2xl text-center pt-2 ">
          a random gifs
        </h2>

      {
        loading ? (<Spinner></Spinner>) : (    <img src={gif} width="350"></img>)
      }




    
        <button
          onClick={clickHandler}
          className="capitalize text-center w-9/12  bg-lime-600 text-lg p-1 mb-5 rounded-lg"
        >
          generate
        </button>
      </div>
    </>
  );
};

export default Random;

import React, { useEffect, useState } from 'react';
import {VideoCard }from './VideoCard';
import { NewVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const API_KEY = "AIzaSyAyA-StRt_ncuVBDFLOUB3Y8V7uT-A9yus";
const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

function VideoContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const response = await fetch(YOUTUBE_API);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log("api data", json);
      setData(json.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("data in the api page",data)
  return (
    
    <div className='flex flex-wrap mx-auto  justify-center items-center cursor-pointer'>
        { data[0] && 
          <NewVideoCard data={data[0]}/>
        
        }
        {
          data.map((item)=>(
           <Link to={"/watch?v="+item.id} >
       <VideoCard key={item.id}  data={item} />

           </Link>
          ))
        }
     </div>
   
      
  );
}


export default VideoContainer;


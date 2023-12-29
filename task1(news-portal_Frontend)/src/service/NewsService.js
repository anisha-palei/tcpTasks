import React ,{useEffect} from 'react'
import axios from 'axios';

     const getData=async (url)=>{
        try{
      const resp=await axios.get(`https://newsapi.org/v2/top-headlines?country=${url}&apiKey=cb1c1f4aece04978b975e52dff7cbe0b`);
      ;
      return resp.data.articles;
        }catch(err){
            throw err;
        }
     }
     const healthData=async ()=>{
      try{
    const resp=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cb1c1f4aece04978b975e52dff7cbe0b`);
    return resp.data.articles;
      }catch(err){
          throw err;
      }}
      
     const getData2=async (url2)=>{
      try{
    const resp=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${url2}&apiKey=cb1c1f4aece04978b975e52dff7cbe0b`);
    return resp.data.articles;
      }catch(err){
          throw err;
      }
   }
  
export {getData,getData2,healthData};

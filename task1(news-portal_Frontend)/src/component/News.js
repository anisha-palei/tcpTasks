 import React ,{useEffect,useRef, useState} from 'react'
 import Newsitems from './Newsitems';
 import {getData,getData2,healthData} from '../service/NewsService';
 import "../App.css";
 import Sidebar from './Sidebar';
function News(probs){
const isMounted = useRef(false);
const [news,setNews]=useState([]);
const [health,setHealthNews]=useState([]);
    useEffect(()=>{
      const fetchHealth= async()=>{
        const news= await healthData()
        setHealthNews(news);
        console.warn("Health",news);
      }
        if (!isMounted.current) {
         const fetchNews= async()=>{
              const news= await getData(probs.data1)
              console.warn(news);
              setNews(news);
             isMounted.current = true;
         }
        const fetchNews2= async()=>{
            const news= await getData2(probs.data2)
            console.warn("science news",news);
            setNews(news);
            isMounted.current = true;
       }       
       
       fetchHealth();
       fetchNews();
        fetchNews2();
    }
    },[news])
    return(
<>    
       <div className="App" style={{ marginTop: "6%",backgroundColor:'#b8cad0' }}>
       <div className="container my-2">
      
        <div className="row">

         <div className='col-md-9'>
       <div className="row">
        {  news.map((item)=>(
            <div key={item.url} className="col-md-6">
           <Newsitems title={item.title} description={item.description} source={item.source.name} imageUrl={item.urlToImage} url={item.url} publishedAt={item.publishedAt} />
       </div>
        ))
          }
             </div>
            </div>
         <div className='col-md-3 side'>
         
            <div className='row'>
              {
                health.map((item)=>(
                  <div key={item.url} className="col-md-12 side">
                  <Sidebar title={item.title} url={item.url}/>
                </div> 
                ))
              }
              </div>
              </div>
       </div>
       </div>
       </div>
     </>
    )
}
export default News;
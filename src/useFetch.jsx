import { useState, useEffect } from "react";


const  useFetch= (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async()=>{
        setLoading(true);
        setError(null);
        const response = await fetch(url)
        .then(res=>{
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");  
          }
          return res.json();
          
        })
        .then(response =>{
          setData(response);
          setLoading(false)
        })
        .catch(err =>{
          setError(err.message)
          setLoading(false)
          
        })
      };
        useEffect(() =>{
          fetchData();
        },[url]);

    return {data, loading, error}
}
 
export default useFetch ;
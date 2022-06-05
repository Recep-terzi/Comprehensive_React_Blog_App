import { useState, useEffect } from "react";

export const useFetch = (url,method="GET") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);
  const postData =(data) =>{
    setOptions({
      method : "POST",
      headers :{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      setLoading(true);
      try {
        const res = await fetch(url,{...fetchOptions});
        const data = await res.json();
        setTimeout(() => {
          setLoading(false);
          setData(data);
          setError(e => e.error);
        },1000);
      } catch (error) {
        setLoading(false);
        setError("error");
      }
    };
    if(method === "GET"){
      fetchData()
    }
    if(method === "POST"&& options){
      fetchData(options)
    }
  }, [url,method,options]);
  return { data, error, loading, postData};
};

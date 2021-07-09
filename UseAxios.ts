import React, {useEffect, useState} from "react";


function useAsync<T>(asyncFunction : () => Promise<T>){
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const [run,setRun] = useState(false);

  const onRun = () => {
    setRun(true);
  }

  const fetch = React.useCallback( async ()=>{ 
      setLoading(true);
      setError(null);
      try{
        const response = await asyncFunction();
        setData(response);
        setLoading(false);
        return response;
      }catch(err){
        setError(err);
        setLoading(false);
        return error;
      }
  },[asyncFunction]);

  useEffect(() => {
    if(run) fetch(); 
  },[run]);

  return { loading,data,error,fetch,onRun }
}

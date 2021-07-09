import React, {useEffect, useState} from "react";

export const useAsync = (Function : () => Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState(null);

  const fetch = async ()=>{ 
      setLoading(true);
      setError(null);
      try{
        const response = await Function();
        setData(response);
        setLoading(false);
        return response;
      }catch(err){
        setError(err);
        setLoading(false);
        return error;
      }
  };

  useEffect(() => {
    fetch();
  },[fetch]);

  return { loading,data,error }
}

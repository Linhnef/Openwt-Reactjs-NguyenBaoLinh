import { AxiosResponse } from "axios";
import React, {useEffect, useState} from "react";

export const useAsync = (Function : () => Promise<AxiosResponse<any>>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AxiosResponse<any>>();
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
        let error = axios.isCancel(err)
              ? 'Request Cancelled'
              : err.code === 'ECONNABORTED'
              ? 'A timeout has occurred'
              : err.response.status === 404
              ? 'Resource Not Found'
              : 'An unexpected error has occurred';
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

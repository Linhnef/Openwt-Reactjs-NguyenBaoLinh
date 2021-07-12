import React, {useEffect, useState} from "react";


export const useAsync = <T>(asyncFunction : () => Promise<T>,active : boolean) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState(null);

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

  React.useEffect(() => {
    if(active) fetch();
  },[fetch,active]);

  return { loading,data,error,fetch }
}

//Usage
//const action = useAsync<T>(() => Promise<T>));

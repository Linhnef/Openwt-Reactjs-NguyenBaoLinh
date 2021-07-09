import * as React from 'react';
import  { CancelTokenSource } from 'axios';
import {orderProps, productProps} from '../interface/productInterface';
import {ModalOverlay} from '../component/FoodApp/card/Card';
import {ItemProducts} from '../component/FoodApp/product/ItemProdcuts';
import {CartContext} from '../store/foodContext';
import AxiosClient from '../API/axiosClient';




interface useFectProps{
  header : {}
}


export const UseFetch = (props : useFectProps) => {


  const [data,setData]= React.useState(defaultData);
  const [loading,setLoading] = React.useState<boolean>(true);
  const [error,setError] = React.useState<string>('');
  const cancelToken = axios.CancelToken;
  const [cancelTokenSource,setCancelTokenSource] = React.useState<CancelTokenSource>(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  }  

  React.useEffect(() => {
    AxiosClient(props.header)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        let error = axios.isCancel(err)
          ? 'Request Cancelled'
          : err.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : err.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  },[props.header]);

  return { data,error,loading}

}
  

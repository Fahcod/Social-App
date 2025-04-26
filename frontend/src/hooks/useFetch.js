import { url } from '../utils/url';
import axios from "axios"

const useFetch = async (path) => {

  let data = [];
  let error = "";

  // allow credentials
  axios.defaults.withCredentials=true;

  let response = await axios.get(`${url}/${path}`)

  if(response.data.success){
   data=response.data.data
   return {data,error,success:true}

  }else{
    err = response.data.message
    error=err
    return {data:[],error,success:false}
  }


}

export default useFetch;

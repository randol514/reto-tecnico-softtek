import useFetch from "../hooks/useFecth";
import { API_ENDPOINTS } from "../constants/api";

export const useUsers = ()=>{
  return useFetch(API_ENDPOINTS.USERS)
}

export const usePlans = () =>{
  return useFetch(API_ENDPOINTS.PLANS)
}
import axios from "axios";


export const getTracks=()=>{
    return  axios.get("https://api.bank.konnect.samagra.io/track") 
}
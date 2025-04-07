/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"

export const isAuthenticated = async(): Promise<boolean> => {
    try{
        const res = await axios.get(import.meta.env.VITE_BACKEND_URL + "/me", {
            withCredentials:true
        });
        console.log("Auth check response", res.data);
        if(res.status === 200) return true;
        return false;
    }catch(error){
        return false;
    }
};
import axios from "axios";
import { endpoints } from "./endpoint";

export const getUser = async(name, password) => {
    try {
        const {data} = await axios.get(`${endpoints.authors}?user=${name}&password=${password}`);

        if(data.length){
            return data[0];
        }else{
            return false;
        }
        
    } catch (error) {
        console.log(error);
        return error;
    }
}
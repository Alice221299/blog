import axios from "axios"
import { endpoints } from "./endpoint"

export const getCategories = async () => {
    try {
        const {data} = await axios.get (endpoints.categories)
        return data
    } catch (error) {
        return error
    }
    
}
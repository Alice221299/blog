import axios from "axios"
import { endpoints } from "./endpoint"

export const getArticles = async () => {
    try {
        const {data} = await axios.get(endpoints.article)
        return data
    } catch (error) {
        return error
    }
}